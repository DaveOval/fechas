const showDate = () => {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    let weekday;

    if (!day){
        document.getElementById("result").innerHTML = "Falta dia"
        return
    }
    if (!month){
        document.getElementById("result").innerHTML = "Falta mes"
        return
    }
    if (!year){
        document.getElementById("result").innerHTML = "Falta año"
        return
    }

    switch (dayOfWeek) {
      case 0:
        weekday = "Domingo";
        break;
      case 1:
        weekday = "Lunes";
        break;
      case 2:
        weekday = "Martes";
        break;
      case 3:
        weekday = "Miércoles";
        break;
      case 4:
        weekday = "Jueves";
        break;
      case 5:
        weekday = "Viernes";
        break;
      case 6:
        weekday = "Sábado";
        break;
    }

    document.getElementById("result").innerHTML = "El dia " + day + " / " + month + " / " + year + " cayó en " + weekday + ".";
  }