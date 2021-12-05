$("#content").hide();

function choose(i) {
  const choosen = datas[i];
  $("#id").text(choosen.id);
  $("#title").text(choosen.title);
  $("#image").attr("src", `img/${choosen.id}.PNG`);
  $("#name").text(choosen.name);
  $("#desc").text(choosen.desc);
  $("#play").attr("href", choosen.play);
  $("#src").attr("href", choosen.src);
}

function roll(sec) {
    setTimeout(() => {
      if (sec < 900) {
        choose(Math.floor(Math.random() * datas.length));
        roll(sec * 1.08);
      } else {
        choose(0);
        $("body").css("color", `#44A`);
        $("#title").css("background-color", `#44A`);
        $("#play").show();
        $("#choose").prop('disabled', false);
      }
    }, sec < 10 ? 10 : sec);
}

$("#choose").on("click", () => {
  datas = datas.filter(e => e.id != $("#id").text() );
  $("#head").hide();
  $("#content").show();
  $("#play").hide();
  $("#choose").prop('disabled', true);
  $("body").css("color", `#444`);
  $("#title").css("background-color", `#444`);
  roll(0.5);
});
