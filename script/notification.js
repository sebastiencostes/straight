window.addEventListener("load", () => {
  const arrayNotifications = document.querySelectorAll(".notification");
  const arrayButtons = document.querySelectorAll(".open-notification");
  const minTime = 2800;
  const maxTime = 10000;

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
  for (let btn of arrayButtons) {
    j++;
    btn.setAttribute("data-notification", j);
  }

  /*
  Notification auto-dismissed
  */
  notification = (lengthOfTime) => {
    for (let btn of arrayButtons) {
      btn.addEventListener("click", (e) => {
        //get current btn attr
        let currentBtn = e.currentTarget.getAttribute("data-notification");
        for (let notif of arrayNotifications) {
          //get current notif
          let currentNotif = notif.getAttribute(
            "data-notification",
            currentBtn
          );
          if (currentNotif === currentBtn) {
            notif.classList.remove("d-none");
            notif.classList.add("d-block");
          }

          if (lengthOfTime >= minTime && lengthOfTime <= maxTime) {
            setTimeout(() => {
              notif.classList.remove("d-block");
              notif.classList.add("d-none");
            }, lengthOfTime);
          }

          //hiding notidication when clicking outside
          document.addEventListener("click", (e) => {
            let isNotif = notif.contains(e.target);
            if (isNotif) {
              notif.classList.remove("d-block");
              notif.classList.add("d-none");
            }
          });
        }
      });
    }
  };
  //Add value between 2800 & 8000 to auto dismiss notification
  notification();
});
