function checkEmptyFiels() {
    console.log('hello....');
    var fname = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var con = document.getElementById("mob").value;
    var img = document.getElementById("image").value;
    //check there is any empty fields or not
    if (fname === "") {
        alert("Please enter First Name");
        document.getElementById("name").focus();
    }
    else if (dob === "") {
        alert("Please Enter Date-Of-Birth");
        document.getElementById("dob").focus();

    }
    else if (email === "") {
        alert("Please Enter Email");
        document.getElementById("email").focus();
    }

    // else if (con === "") {
    //     alert("Please Enter 10digit Mobile Number");
    //     document.getElementById("mob").focus();
    // }
    else if (!img) {
        alert("Please Upload Image");
    }
    // loadImage();
    // else if (!validateImageUpload()) {
    //     return true;
    // }
}
function loadImage() {
    console.log('hi....');
    document.getElementById("image").addEventListener("change", function (e) {
        const file = e.target.files[0];

        //declare const varieble To get Files as in 0th location of our selected files
        if (file) {
            //we Created Object Here Of FileReader Method Or Function
            //inbuilt function/method is "FileReader"
            const reader = new FileReader();//object here
            reader.onload = function (e) {

                const imageUrl = e.target.result;//get image 
                // console.log(imageUrl);
                // const imagePre = document.getElementById("image");
                document.getElementById("Profile").innerHTML = `<img src="${imageUrl}" alt="Image Preview">`;
                document.getElementById("Profile").style.width = "85%";
                document.getElementById("Profile").style.height = "70%";

            };
            reader.readAsDataURL(file);
        }
    })
}
function addRowToTable() {
    var table = document.getElementById('table');
    if (!checkEmptyFiels()) {
        var addNewRow = table.insertRow(table.rows.length),
            cell1 = addNewRow.insertCell(0),
            cell2 = addNewRow.insertCell(1),
            cell3 = addNewRow.insertCell(2),
            cell4 = addNewRow.insertCell(3),
            cell5 = addNewRow.insertCell(4),
            cell6 = addNewRow.insertCell(5);
        cell7 = addNewRow.insertCell(6);
        cell8 = addNewRow.insertCell(7);
        cell9 = addNewRow.insertCell(8);

        fname = document.getElementById('name').value,
            birth = document.getElementById('dob').value,
            email = document.getElementById('email').value,
            mob = document.getElementById('mob').value,
            gender = document.getElementById('gender').value;
        console.log("goa.......")
        city = document.getElementById('city').value;
        picInput = document.getElementById('image'),
            pic = picInput.files[0];
        cell1.innerHTML = fname;
        cell2.innerHTML = birth;
        cell3.innerHTML = email;
        cell4.innerHTML = mob;
        cell5.innerHTML = gender;
        cell6.innerHTML = city;
        if (pic) {
            var imgElement = document.createElement('img');
            imgElement.src = URL.createObjectURL(pic);
            imgElement.style.width = "50px";
            imgElement.style.height = "50px";
            cell7.appendChild(imgElement);
        }

        const btn = document.createElement("BUTTON");
        btn.name = edit;
        btn.alert = function () {
            alert('i am edit button');
        };
        btn.innerHTML = "Edit";
        btn.style.display = 'flex-inline';
        btn.style.width = '50px';
        btn.style.height = '30px';
        btn.style.marginRight = '5px';
        btn.addEventListener("click", function () {
            var rIndex, table1 = document.getElementById('table');
            for (var i = 1; i < table1.rows.length; i++) {
                table1.rows[i].onclick = function () {
                    rIndex = this.rowIndex; document.getElementById('name').value = this.cells[0].innerHTML; document.getElementById('dob').value = this.cells[1].innerHTML;
                    document.getElementById('email').value = this.cells[2].innerHTML;
                    document.getElementById('mob').value = this.cells[3].innerHTML;
                    var imgElement = document.getElementById('Profile').querySelector('img');
                    imgElement.src = this.cells[4].querySelector('img').src;
                };
            }
        })
        cell8.appendChild(btn);

        const Dbtn = document.createElement("BUTTON");
        Dbtn.innerHTML = "Delete"; // Corrected variable name here
        Dbtn.style.display = 'flex-inline'
        Dbtn.style.width = '55px';
        Dbtn.style.height = '30px';
        cell8.appendChild(Dbtn);

        selectRowToInputFields();
    }
}
function selectRowToInputFields() {
    var rIndex, table1 = document.getElementById('table');
    for (var i = 1; i < table1.rows.length; i++) {
        table1.rows[i].onclick = function () {
            rIndex = this.rowIndex; document.getElementById('name').value = this.cells[0].innerHTML; document.getElementById('dob').value = this.cells[1].innerHTML;
            document.getElementById('email').value = this.cells[2].innerHTML;
            document.getElementById('mob').value = this.cells[3].innerHTML;
            var imgElement = document.getElementById('Profile').querySelector('img');
            imgElement.src = this.cells[4].querySelector('img').src;
        };
    }
}

