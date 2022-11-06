const Body = document.querySelector("body");

let bodyWidth = getComputedStyle(Body);
console.log(bodyWidth.width);

let browserWidth = parseInt(bodyWidth.width);

const headerLogo = document.querySelector(".header_logo");
let headerLogoMargin = getComputedStyle(headerLogo);
let result = parseInt(headerLogoMargin.marginRight);

const menuBurger = document.querySelector(".menu_burger");
const menuBody_2 = document.querySelector(".menu_body_2");
const arr_opacity = document.querySelectorAll(".opacity");

let burger_count = 0;

menuBurger.addEventListener("click", function(event){
    menuBody_2.classList.toggle("active");
    if (menuBody_2.classList.contains("active")){
        menuBody_2.style.display = "block";
        Body.style.overflow = "hidden";
        for (let index = 0; index < arr_opacity.length; index++){
            arr_opacity[index].style.opacity = "0.2";
        };
    };
    if (!menuBody_2.classList.contains("active")){
        menuBody_2.style.display = "none";
        Body.style.overflow = "auto";
        for (let index = 0; index < arr_opacity.length; index++){
            arr_opacity[index].style.opacity = "1";
        };
    };
});

const arr_links = document.querySelectorAll(".menu_link");
const arr_ids = document.querySelectorAll(".block");

for (let index = 0; index < arr_links.length; index++){
    arr_links[index].addEventListener("click", function(event){
        for (let index_2 = 0; index_2 < arr_ids.length; index_2++){
            if (arr_links[index].textContent.toLowerCase() == arr_ids[index_2].id.toLowerCase()){
                arr_ids[index_2].scrollIntoView({
                    block: "start",
                    inline: "nearest",
                    behavior: "smooth"
                });
            };
        };
        event.preventDefault();
    })
};

const arr_links_2 = document.querySelectorAll(".menu_list_2_link");

for (let index = 0; index < arr_links_2.length; index++){
    arr_links_2[index].addEventListener("click", function(event) {
        for (let index = 0; index < arr_opacity.length; index++){
            arr_opacity[index].style.opacity = "1";
        };
        menuBody_2.classList.toggle("active");
        menuBody_2.style.display = "none";
        Body.style.overflow = "auto";
        for (let index_2 = 0; index_2 < arr_ids.length; index_2++){
            if (arr_links_2[index].textContent.toLowerCase() == arr_ids[index_2].id.toLowerCase()){
                arr_ids[index_2].scrollIntoView({
                    block: "start",
                    inline: "nearest",
                    behavior: "smooth"
                });
            }
        };
        event.preventDefault();
    })
}

const menuSubList = document.querySelector(".first_block_table_menu_sub_list");
const tableGrade = document.querySelector("#table_grade");
const tableDate = document.querySelector("#table_date");
const arr_arrows = document.querySelectorAll(".first_block_table_arrow");
const buttonWrapper = document.querySelector(".first_block_button_wrapper");

let count = 0;

for (let index = 0; index < arr_arrows.length; index++){
    if (arr_arrows[index].classList.contains("location")){
        arr_arrows[index].addEventListener("click", function(event){
            if (count % 2 == 0){
                arr_arrows[index].classList.add("transform");
                if (arr_arrows[index].classList.contains("transform_2")){
                    arr_arrows[index].classList.remove("transform_2");
                };
                if (arr_arrows[index].classList.contains("transform")){
                    menuSubList.style.display = "block";
                    tableGrade.classList.add("add_margin");
                    buttonWrapper.classList.add("add_margin");
                    buttonWrapper.classList.add("add_margin");
                };
            };
            if (count % 2 != 0){
                if (arr_arrows[index].classList.contains("transform")){
                    arr_arrows[index].classList.remove("transform");
                    arr_arrows[index].classList.add("transform_2");
                    menuSubList.style.display = "none";
                    tableGrade.classList.remove("add_margin");
                    buttonWrapper.classList.remove("add_margin");
                };
            };
            count += 1;
            if (count == 10){
                count = 0;
            };
        });
    };
};

const menuSubList_2 = document.querySelector(".first_block_table_menu_sub_list_2");

let count_2 = 0;

for (let index = 0; index < arr_arrows.length; index++){
    if (arr_arrows[index].classList.contains("activity")){
        arr_arrows[index].addEventListener("click", function(event) {
            if (count_2 % 2 == 0){
                arr_arrows[index].classList.add("transform");
                if (arr_arrows[index].classList.contains("transform_2")){
                    arr_arrows[index].classList.remove("transform_2");
                };
                if (arr_arrows[index].classList.contains("transform")){
                    menuSubList_2.style.display = "block";
                    tableDate.classList.add("add_margin");
                    buttonWrapper.classList.add("add_margin");
                };
            };
            if (count_2 % 2 != 0){
                if (arr_arrows[index].classList.contains("transform")){
                    arr_arrows[index].classList.remove("transform");
                    arr_arrows[index].classList.add("transform_2");
                    menuSubList_2.style.display = "none";
                    tableDate.classList.remove("add_margin");
                    buttonWrapper.classList.remove("add_margin");
                };
            };
            count_2 += 1;
            if (count_2 == 10){
                count_2 = 0;
            }
        });
    }
}

const menuSubList_3 = document.querySelector(".first_block_table_menu_sub_list_3");

let count_3 = 0;

for (let index = 0; index < arr_arrows.length; index++){
    if (arr_arrows[index].classList.contains("grade")){
        arr_arrows[index].addEventListener("click", function(event){
            if (count_3 % 2 == 0){
                arr_arrows[index].classList.add("transform");
                if (arr_arrows[index].classList.contains("transform_2")){
                    arr_arrows[index].classList.remove("transform_2");
                };
                if (arr_arrows[index].classList.contains("transform")){
                    menuSubList_3.style.display = "block";
                    buttonWrapper.classList.add("add_margin_2");
                };
            };
            if (count_3 % 2 != 0){
                if (arr_arrows[index].classList.contains("transform")){
                    arr_arrows[index].classList.remove("transform");
                    arr_arrows[index].classList.add("transform_2");
                    menuSubList_3.style.display = "none";
                    buttonWrapper.classList.remove("add_margin_2");
                };
            };
            count_3 += 1;
            if (count_3 == 10){
                count_3 = 0;
            };
        });
    };
};

const menuSubList_4 = document.querySelector(".first_block_table_menu_sub_list_4");

let count_4 = 0;

for (let index = 0; index < arr_arrows.length; index++){
    if (arr_arrows[index].classList.contains("date")){
        arr_arrows[index].addEventListener("click", function(event){
            if (count_4 % 2 == 0){
                arr_arrows[index].classList.add("transform");
                if (arr_arrows[index].classList.contains("transform_2")){
                    arr_arrows[index].classList.remove("transform_2");
                };
                if (arr_arrows[index].classList.contains("transform")){
                    menuSubList_4.style.display = "block";
                };
            };
            if (count_4 % 2 != 0){
                if (arr_arrows[index].classList.contains("transform")){
                    arr_arrows[index].classList.remove("transform");
                    arr_arrows[index].classList.add("transform_2");
                    menuSubList_4.style.display = "none";
                };
            };
            count_4 += 1;
            if (count_4 == 10){
                count_4 = 0;
            };
        });
    };
};

const firstCircle = document.querySelector("#first_circle");
const secondCircle = document.querySelector("#second_circle");
const arr_sticks_1 = document.querySelectorAll(".stick_1");
const arr_sticks_2 = document.querySelectorAll(".stick_2");
const fifthBlockName = document.querySelector(".fifth_block_name");
const fifthBlockDescription = document.querySelector(".fifth_block_description");
//let arr_src_1 = ["venv/imgs_from_figma/Ellipse 55.svg", "venv/imgs_from_figma/Ellipse 56.svg", "venv/imgs_from_figma/Ellipse 57.svg", "venv/imgs_from_figma/Ellipse 58.svg", "venv/imgs_from_figma/Ellipse 59.svg"];
let arr_src_1 = ["/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/Ellipse 55.svg", "/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/Ellipse 56.svg", "/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/Ellipse 57.svg", "/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/Ellipse 58.svg", "/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/Ellipse 59.svg"];
//let arr_src_1_rev = ["venv/imgs_from_figma/Ellipse 58.svg", "venv/imgs_from_figma/Ellipse 57.svg", "venv/imgs_from_figma/Ellipse 56.svg", "venv/imgs_from_figma/Ellipse 55.svg"];
let arr_src_1_rev = ["/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/Ellipse 58.svg", "/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/Ellipse 57.svg", "/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/Ellipse 56.svg", "/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/Ellipse 55.svg"];
let arr_src_2 = ["/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/Ellipse 58.svg", "/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/Ellipse 59.svg"];
let arr_names_1 = ["Marina Koroleva", "Semyon Sergeev", "Angelina Sorokina", "Nikita Zaitsev", "Natalia Zakharova"];
let arr_names_2 = ["Nikita Zaitsev", "Angelina Sorokina", "Semyon Sergeev", "Marina Koroleva"];
let arr_descriptions = ["The great developer of sites, bots and applications in PHP! She's done 65 projects.",
"The great copywriter, who has done 104 projects. The price suits his experience.", "The great designer of sites. She's done 25 projects.",
"The great marketing specialist, who has big experience at marketing. He's done 144 projects. There is a high price, but you'll definitely get great results!",
"The great Motion designer of everything, such as sites and applications. She's done 71 project."];

const fifthBlockImg = document.querySelector(".fifth_block_image_6");

let count_7 = 0;
let count_10 = 0;
let count_name_1 = 0;
let count_description = 0;
let count_name_3 = 0;

firstCircle.addEventListener("click", function(event) {
    firstCircle.style.cssText = "border: 2px solid #000;";
    secondCircle.style.cssText = "border: 2px solid #E5E5E5;";
    for (let index = 0; index < arr_sticks_1.length; index++){
        arr_sticks_1[index].style.background = "#000";
    };
    for (let index = 0; index < arr_sticks_2.length; index++){
        arr_sticks_2[index].style.background = "#E5E5E5";
    };
    if (count_8 != arr_src_2.length){
        for (let index = 0; index < arr_src_1.length; index++){
            if (count_7 == index){
                fifthBlockImg.src = arr_src_1[index];
                count_7 += 1;
                console.log(count_7);
                break;
            };
            if (count_7 == arr_src_1.length){
                count_7 = 0;
                fifthBlockImg.src = "/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/image 6.svg";
            };
        };
        for (let index = 0; index < arr_names_1.length; index++){
            if (count_name_1 == index){
                fifthBlockName.innerHTML = arr_names_1[index];
                count_name_1 += 1;
                break;
            };
            if (count_name_1 == arr_names_1.length){
                count_name_1 = 0;
                fifthBlockName.innerHTML  = "Edward Newgate";
            };
        };
        for (let index = 0; index < arr_descriptions.length; index++){
            if (count_description == index){
                fifthBlockDescription.innerHTML = arr_descriptions[index];
                count_description += 1;
                break;
            };
            if (count_description == arr_descriptions.length){
                count_description = 0;
                fifthBlockDescription.innerHTML = "“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”";
            };
        };
    };
    if (count_9 == arr_src_1_rev.length){
        for (let index = 0; index < arr_src_1_rev.length; index++){
            if (count_10 == index){
                fifthBlockImg.src = arr_src_1_rev[index];
                count_10 += 1;
                break;
            };
            if (count_10 == arr_src_1_rev.length){
                count_10 = 0;
                fifthBlockImg.src = "/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/image 6.svg";
                fifthBlockName.innerHTML = "Edward Newgate";
            };
        };
        for (let index = 0; index < arr_names_2.length; index++){
            if (count_name_3 == index){
                fifthBlockName.innerHTML = arr_names_2[index];
                count_name_3 += 1;
                break;
            };
        };
    };
});

let count_8 = 0;
let count_9 = 0;
let count_name_2 = 0;

secondCircle.addEventListener("click", function(event) {
    firstCircle.style.cssText = "border: 2px solid #E5E5E5;";
    secondCircle.style.cssText = "border: 2px solid #000;";
    for (let index = 0; index < arr_sticks_2.length; index++){
        arr_sticks_2[index].style.background = "#000";
    };
    if (count_8 != arr_src_2.length){
        for (let index = 0; index < arr_src_1.length; index++){
            if (count_7 == index){
                fifthBlockImg.src = arr_src_1[index];
                count_7 += 1;
                console.log(count_7);
                break;
            };
            if (count_7 == arr_src_1.length){
                count_7 = 0;
                fifthBlockImg.src = "/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/image 6.svg";
            };
        };
        for (let index = 0; index < arr_names_1.length; index++){
            if (count_name_1 == index){
                fifthBlockName.innerHTML = arr_names_1[index];
                count_name_1 += 1;
                break;
            };
            if (count_name_1 == arr_names_1.length){
                count_name_1 = 0;
                fifthBlockName.innerHTML = "Edward Newgate";
            };
        };
        for (let index = 0; index < arr_descriptions.length; index++){
            if (count_description == index){
                fifthBlockDescription.innerHTML = arr_descriptions[index];
                count_description += 1;
                break;
            };
            if (count_description == arr_descriptions.length){
                count_description = 0;
                fifthBlockDescription.innerHTML = "“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”";
            };
        };
    };
    if (count_9 == arr_src_1_rev.length){
        for (let index = 0; index < arr_src_1_rev.length; index++){
            if (count_10 == index){
                fifthBlockImg.src = arr_src_1_rev[index];
                count_10 += 1;
                break;
            };
            if (count_10 == arr_src_1_rev.length){
                count_10 = 0;
                fifthBlockImg.src = "/Users/michail/PycharmProjects/html_from_Figma/venv/imgs_from_figma/image 6.svg";
            };
        };
    };
    for (let index = 0; index < arr_sticks_1.length; index++){
        arr_sticks_1[index].style.background = "#E5E5E5";
    };
});

const secondLogo = document.querySelector("#second_logo");
secondLogo.style.margin = "0";
