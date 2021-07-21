const arrayNotifications = document.querySelectorAll(".notification");
const arrayOpenButtons = document.querySelectorAll(".notification-open");
const arrayCloseButtons = document.querySelectorAll(".notification-close");
const dismissTime = 4200;

/*
  Set atrr in notification
  */
let i = 0;
for (let notification of arrayNotifications) {
  i++;
  notification.setAttribute("data-notification", i);
}

/*
  Set attr in button
  */
j = 0;
for (let btn of arrayOpenButtons) {
  j++;
  btn.setAttribute("data-notification", j);
}
//notification
notification = () => {
  //open
  openNotification = (trigger) => {
    for (let currentBtn of arrayOpenButtons) {
      //get current btn attr
      currentBtn = trigger;
      for (let notif of arrayNotifications) {
        //get current notif
        let currentNotif = notif.getAttribute("data-notification", trigger);
        if (currentNotif === trigger) {
          notif.classList.remove("d-none");
          notif.classList.add("d-block");
        }
        //toggling
        if (trigger !== currentNotif) {
          notif.classList.remove("d-block");
          notif.classList.add("d-none");
        }
      }
    }
  };
  //call openNotification()
  for (let btn of arrayOpenButtons) {
    btn.addEventListener("click", (e) => {
      let currentBtn = e.currentTarget.getAttribute("data-notification");
      openNotification(currentBtn);
    });
  }
  //close
  closeNotification = (trigger) => {
    for (let currentBtn of arrayCloseButtons) {
      //get current btn attr
      currentBtn = trigger;
      for (let notif of arrayNotifications) {
        //get current notif
        let currentNotif = notif.getAttribute("data-notification", trigger);
        if (currentNotif !== trigger) {
          notif.classList.remove("d-block");
          notif.classList.add("d-none");
        }
      }
    }
  };
  //call closeNotification()
  for (let btn of arrayCloseButtons) {
    btn.addEventListener("click", (e) => {
      let currentBtn = e.currentTarget.getAttribute("data-notification");
      closeNotification(currentBtn);
    });
  }
  //auto-dismiss
  autoDismiss = () => {
    for (let notif of arrayNotifications) {
      if (notif.classList.contains("auto-dismiss")) {
        reinit = setTimeout(() => {
          notif.classList.remove("d-block");
          notif.classList.add("d-none");
        }, dismissTime);
      }
    }
  };
  autoDismiss();
  //call autoDismiss()
  for (let btn of arrayOpenButtons) {
    btn.addEventListener("click", () => {
      clearTimeout(reinit);
      autoDismiss();
    });
  }
};
notification();
