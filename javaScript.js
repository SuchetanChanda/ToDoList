   function confirmClear() {
        let conf = confirm("Press ok to clear the List:");
        if (conf) {
          deleteAll();
        }
      }
      function getAndUpdate() {
        console.log("Clicked");
        title = document.getElementById("title").value;
        desc = document.getElementById("desc").value;
        //   console.log(desc);
        if (localStorage.getItem("items") == null) {
          itemsJSONArray = [];
          itemsJSONArray.push([title, desc]);
          localStorage.setItem("items", JSON.stringify(itemsJSONArray));
          tableBody.innerHTML=`<tr>
                    <th scope="row">No tasks remaining.</th>
                  </tr>`;
        } else {
          itemsJSONtring = localStorage.getItem("items");
          itemsJSONArray = JSON.parse(itemsJSONtring);
          itemsJSONArray.push([title, desc]);
          localStorage.setItem("items", JSON.stringify(itemsJSONArray));
        }
        update();
      }
      function update() {
        
        if (localStorage.getItem("items") == null) {
          itemsJSONArray = [];
          localStorage.setItem("items", JSON.stringify(itemsJSONArray));
          tableBody.innerHTML=`<tr>
                    <th scope="row">No tasks remaining.</th>
                  </tr>`;
        } else {
          itemsJSONtring = localStorage.getItem("items");
          itemsJSONArray = JSON.parse(itemsJSONtring);
          localStorage.setItem("items", JSON.stringify(itemsJSONArray));
        }

        // Populating the table
        // console.log(itemsJSONArray);
        tableBody = document.getElementById("table");
        let str = "";
        itemsJSONArray.forEach((element, index) => {
          // console.log(element[1]);
          str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td >${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</button> </td>
                  </tr>`;
        });
        tableBody.innerHTML = str;
      }
      add = document.getElementById("add");
      add.addEventListener("click", getAndUpdate);
      update();
      function deleted(itemIndex) {
        itemsJSONtring = localStorage.getItem("items");
        itemsJSONArray = JSON.parse(itemsJSONtring);
        itemsJSONArray.splice(itemIndex, 1);
        localStorage.setItem("items", JSON.stringify(itemsJSONArray));
        update();
      }
      //   clear = document.getElementById("clear");
      //   clear.addEventListener("click", conf=confirm("Do you want to clear the list?"));

      function deleteAll() {
        console.log("clearing");
        localStorage.clear();
        update();
      }
  