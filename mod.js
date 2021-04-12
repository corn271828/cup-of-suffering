sc.Arena.inject({
    init(){
        this.parent()
        this.registerCup('suffer-cup',".\/assets\/data\/arena\/");
    }
})

function bossHPBarPositioner(c, a) { 
	var d = 2;
    var nrows = Math.ceil(c.length / 5);
    var minbarsperrow = Math.floor(c.length / nrows);
    var numbarsperrow = [];
    for (var indix = 0; indix < nrows; ++indix) {
    	numbarsperrow.push(minbarsperrow);
    }
    for (var indix = 0; indix < c.length % nrows; ++indix) {
    	numbarsperrow[indix]++;
    }
	var i = 0;
    for (var currow = 0; currow < nrows; currow++) {
    	for (var b = numbarsperrow[currow], g = (ig.system.width - d * 2) / b, h = d, currbar = 0; currbar < b; ++i, currbar++) {
        var j = c[i];
        j.updatePlacement(h, g, 4 + currow * 14, a == j);
        h = h + g;
    	}
    }
    sc.model.message.setBottomGap(b ? 14 : 0)
}

var bossList = [];

sc.SUB_HP_EDITOR.BOSS.inject({
  update() {
    if (this.hook.currentStateName != "HIDDEN" && !this.listed) {
      bossList.push(this)
      bossHPBarPositioner(bossList, this)
      this.listed = true;
    } else if (this.hook.currentStateName == "HIDDEN" && this.listed) {
      bossList.erase(this)
      bossHPBarPositioner(bossList)
      this.listed = false;
    }
    this.parent();
  },
  
  onDetach() {
    this.parent();
    bossHPBarPositioner(bossList);
  },
  
  updatePlacement(a, b, ydist = 4) {
    this.setSize(b, 11);
    this.setPivot(b / 2, 5.5);
    this.setPos(a, ydist)
  }
})
