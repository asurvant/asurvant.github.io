// TODO: Once a tile has been given a value, it cannot be over-written with a new value

$(function() {
  $grid = generateGrid();

  $currentSelection = [];

  function unselect(tile) {
    let idx = $currentSelection.indexOf(tile);
    if (idx > -1) {
      $currentSelection.splice(idx, 1);
    };
  }

  $('.num-selector').mouseenter(function() {
    $(this).css("background-color", "yellow");
  });

  $('.num-selector').mouseleave(function() {
    $(this).css("background-color", "white");
  });

  $('div').click(function() {
    $(this).toggleClass("selected");
  });

  $('div').click(function() {
    if ($(this).hasClass("selected")) {
      $currentSelection.push("#" + this.id);
    } else {
      unselect("#" + this.id);
    }
  });

  // $('div').click(function() {
  //   $(this).text = $(this.id);
  //   console.log(this.id);
  // })

  // Fills in selected tiles with whatever the user says
  // then removes them from the selection array
  $('.num-selector').click(function() {
    for (var i = 0; i < $currentSelection.length; i++) {
      $($currentSelection[i]).text($(this).html());
      $($currentSelection[i]).toggleClass("selected");
    };

    for (var i = $currentSelection.length - 1; i > -1; i--) {
      for (var idx = 0; idx < $currentSelection.length; idx++) {
        for (var jdx = 0; jdx < $grid.length; jdx++) {
          if ($grid[jdx].indexOf($currentSelection[i]) > -1) {
            $grid[jdx][$grid[jdx].indexOf($currentSelection[i])] = ~~$(this).html();
          }
        }
      }

      unselect($currentSelection[i]);
      // console.log($grid);
    };
  });

  $('.reset').click(function() {
    $('.space').text("");
    $currentSelection = [];
    $('.space.selected').toggleClass("selected");
    $grid = generateGrid();
  });

  $('.solve').click(function() {
    for (var i = 0; i < $grid.length; i++) {
      for (var j = 0; j < $grid.length; j++) {
        if (typeof($grid[i][j]) === "string") {
          $grid[i][j] = 0;
        }
      }
    }

    let solution = solve($grid);
    $guide = generateGrid();

    for (var i = 0; i < $guide.length; i++) {
      for (var j = 0; j < $guide.length; j++) {
        $($guide[i][j]).text(solution[i][j]);
      }
    }
  });
});
