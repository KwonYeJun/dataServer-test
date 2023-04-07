const root = document.getElementById("root");

document.addEventListener("DOMContentLoaded", () => {

  let date = new Date();
  Date.prototype.test = function (yy, mm, dd, hh, mn, ss) {
    yy = this.getFullYear().toString();
    mm = (this.getMonth() + 1).toString();
    dd = this.getDate().toString();
    hh = this.getHours().toString();
    mn = this.getMinutes().toString();
    ss = this.getSeconds().toString();
    return yy + "-" + mm + "-" + dd + " 시간 "+hh + "시 "+ mn+ "분 " +ss +"초";
  };

  console.log(date.test());
});
