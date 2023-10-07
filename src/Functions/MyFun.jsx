    const styles = [
        {
          id: 1,
          borderTop: "90px solid #88ABFF",
        },
        {
          id: 2,
          borderTop: "25px solid #88ABFF",
        },
        {
          id: 3,
          borderTop: "24px solid #88ABFF",
        },
        {
          id: 4,
          borderTop: "23px solid #88ABFF",
        },
        {
          id: 5,
          borderTop: "22px solid #88ABFF",
        },
        {
          id: 6,
          borderTop: "21px solid #88ABFF",
        },
        {
          id: 7,
          borderTop: "20px solid #88ABFF",
        },
        {
          id: 8,
          borderTop: "19px solid #88ABFF",
        },
        {
          id: 9,
          borderTop: "18px solid #88ABFF",
        },
        {
          id: 10,
          borderTop: "17px solid #88ABFF",
        },
        {
          id: 11,
          borderTop: "16px solid #88ABFF",
        },
        {
          id: 12,
          borderTop: "15px solid #88ABFF",
        },
        {
          id: 13,
          borderTop: "14px solid #88ABFF",
        },
        {
          id: 14,
          borderTop: "13px solid #88ABFF",
        },
        {
          id: 15,
          borderTop: "12px solid #88ABFF",
        },
        {
          id: 16,
          borderTop: "11px solid #88ABFF",
        },
        {
          id: 17,
          borderTop: "10px solid #88ABFF",
        },
        {
          id: 18,
          borderTop: "9px solid #88ABFF",
        },
        {
          id: 19,
          borderTop: "8px solid #88ABFF",
        },
        {
          id: 20,
          borderTop: "7px solid #88ABFF",
        },
        {
          id: 21,
          borderTop: "6px solid #88ABFF",
        },
        {
          id: 22,
          borderTop: "5px solid #88ABFF",
        },
        {
          id: 23,
          borderTop: "4px solid #88ABFF",
        },
        {
          id: 24,
          borderTop: "3px solid #88ABFF",
        },
        {
          id: 25,
          borderTop: "2px solid #88ABFF",
        },
        {
          id: 40,
          borderTop: "1px solid #88ABFF",
        },
      ];
    var colorBox = styles.map((style) => {
        return (
          <div
            className="colorBox"
            key={style.id}
            style={{ borderTop: style.borderTop }}
          ></div>
        );
      });

      const addModaleCss = () => {
        const hide = document.getElementById("hide");
        hide.classList.toggle("hide-seek");
      };

      const addUpdateModaleCss = ()=> {
        const updateHide = document.getElementById('updateHide');
        updateHide.classList.toggle("update-seek");
      }


export {
    colorBox,
    addModaleCss,
    addUpdateModaleCss,
}