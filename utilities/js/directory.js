var wtmenubtn = document.getElementById("wtmenubtn-289fhf");
var itmenubtn = document.getElementById("itmenubtn-f28gfh");
var otherbtn = document.getElementById("othermenubtn-f823hf");
var projectsh2 = document.getElementById("projects-h2-29dhn92");
var btnfinished = document.getElementById("btn-finished-1238ch78");
var btnplanned = document.getElementById("btn-planned-f3v80h3");
var h41outof5 = document.getElementById("h4-1outof5-2d9hfc29");
var ptdesctext1 = document.getElementById("p-tdescription-9dh29dn");
var ghlink1 = document.getElementById("a-href-github-209rd9n8d2");
var progressicon1 = document.getElementById("progress-icon-fo03h93hc");
var mainlink1 = document.getElementById("a-href-link-f9h892");
var circletype1 = document.getElementById('circle-type-9f2j45g');
var circlelabel1 = document.getElementById('circle-label-2d89hf29h');
var h42outof5 = document.getElementById("h4-2outof5-c8hve8a");
var thirditem = document.getElementById("3rd-item-f92h92");
var seconditem = document.getElementById("2nd-item-v98h30");
var fourthitem = document.getElementById("4th-item-83hgft");
var ptdesctext2 = document.getElementById("p-tdescription-2d9h2g4hg");
var progressicon2 = document.getElementById("progress-icon-f893hus");
var ghlink2 = document.getElementById("a-href-github-cv03q8hf");
var mainlink2 = document.getElementById("a-href-link-8f3hu83b");
var circletype2 = document.getElementById('circle-type-viesnv3');
var circlelabel2 = document.getElementById('circle-label-6a84fc6a1w');
var h43outof5 = document.getElementById("h4-3outof5-v39hcv398");
var progressicon3 = document.getElementById("progress-icon-9f2h9f2");
var mainlink3 = document.getElementById("a-href-link-03h8vc8nv");
var h44outof5 = document.getElementById("h4-4outof5-f90q2h089");
var progressicon4 = document.getElementById("progress-icon-0p9fg3fh");
var mainlink4 = document.getElementById("a-href-link-eg099weh");
var h45outof5 = document.getElementById("h4-5outof5-83hv3v8");
var progressicon5 = document.getElementById("progress-icon-f83h8f3dw");
var mainlink5 = document.getElementById("a-href-link-f823gh73g");

wtmenubtn.addEventListener("click", function () {
    wtmenubtn.classList.add("active");
    itmenubtn.classList.remove("active");
    otherbtn.classList.remove("active");
    btnfinished.classList.remove("disabled");
    btnfinished.classList.add("active");
    btnplanned.classList.remove("active");

    projectsh2.innerText = "Web Tools Projects";
    btnfinished.innerText = "4 Finished";
    btnplanned.innerText = "1 Planned";

    h41outof4.innerText = "GDrive Download Link Generator";
    progressicon1.classList.add("ri-check-double-line");
    ptdesctext1.innerText = "Project is finished and there will likely be no future updates.";
    ghlink1.href = "https://github.com/MingTheNoob/GDriveDownloadLinkGenerator";
    mainlink1.href = "/web-tools/gdrive-dl-link-generator";
    circletype1.classList.add("webapp-mark-39f7cg");
    circletype1.classList.remove("webext-mark-c923ncv39");
    circletype1.classList.remove("inb-mark-cs96g32d");
    circletype1.classList.remove("os-mark-209hf29");
    circlelabel1.innerText = "Web App";

    h42outof4.innerText = "QR Code Generator";
    progressicon2.classList.add("ri-check-double-line");
    ptdesctext2.innerText = "Project is finished and there may be future updates.";
    ghlink2.href = "https://github.com/MingTheNoob/QRCodeGenerator";
    mainlink2.href = "/web-tools/qr-code-generator";
    circletype2.classList.add("webapp-mark-39f7cg");
    circletype2.classList.remove("webext-mark-c923ncv39");
    circletype2.classList.remove("inb-mark-cs96g32d");
    circletype2.classList.remove("os-mark-209hf29");
    circletype2.classList.remove("desktopapp-mark-f90h290");
    circlelabel2.innerText = "Web App";
    seconditem.style.display = "block";

    thirditem.style.display = "block";
    fourthitem.style.display = "block";
});

itmenubtn.addEventListener("click", function () {
    itmenubtn.classList.add("active");
    wtmenubtn.classList.remove("active");
    otherbtn.classList.remove("active");

    btnfinished.classList.add("disabled");
    btnfinished.classList.remove("active");
    btnplanned.classList.add("active");

    projectsh2.innerText = "Internet Tools Projects";

    btnfinished.innerText = "0 Finished";
    btnplanned.innerText = "1 Planned";

    h41outof5.innerText = "Neptunium Browser";
    progressicon1.classList.add("ri-calendar-2-fill");
    progressicon1.classList.remove("ri-check-double-line");
    ptdesctext1.innerText = "Design will be during 2023. Production will be in 2024. Release to be determined.";
    ghlink1.href = "https://github.com/BlitzCream/NeptuniumBrowser";
    mainlink1.href = "https://neptunium.io/browser";
    circletype1.classList.add("inb-mark-cs96g32d");
    circletype1.classList.remove("webapp-mark-39f7cg");
    circletype1.classList.remove("webext-mark-c923ncv39");
    circletype1.classList.remove("os-mark-209hf29");
    circlelabel1.innerText = "Internet Browser";

    seconditem.style.display = "none";
    thirditem.style.display = "none";
    fourthitem.style.display = "none";
});

otherbtn.addEventListener("click", function () {
    otherbtn.classList.add("active");
    wtmenubtn.classList.remove("active");
    itmenubtn.classList.remove("active");

    btnfinished.classList.add("disabled");
    btnfinished.classList.remove("active");
    btnplanned.classList.add("active");

    projectsh2.innerText = "Other Projects";
    btnfinished.innerText = "0 Finished";
    btnplanned.innerText = "2 Planned";

    h41outof5.innerText = "Neptunium OS";
    progressicon1.classList.add("ri-calendar-2-fill");
    progressicon1.classList.remove("ri-check-double-line");
    ptdesctext1.innerText = "Development has started, but has been stopped until further plans can be made. Release to be determined.";
    ghlink1.href = "https://github.com/BlitzCream/NeptuniumOS";
    mainlink1.href = "https://neptunium.io/os";
    circletype1.classList.add("os-mark-209hf29");
    circletype1.classList.remove("webapp-mark-39f7cg");
    circletype1.classList.remove("webext-mark-c923ncv39");
    circletype1.classList.remove("inb-mark-cs96g32d");
    circlelabel1.innerText = "Operating System";

    h42outof4.innerText = "PyManager";
    progressicon2.classList.add("ri-calendar-2-fill");
    progressicon2.classList.remove("ri-check-double-line");
    ptdesctext2.innerText = "Development will start in 2023. Release to be determined.";
    ghlink2.href = "https://github.com/MingTheNoob/PyManager";
    mainlink2.href = "/python/PyManager";
    circletype2.classList.add("desktopapp-mark-f90h290");
    circletype2.classList.remove("webapp-mark-39f7cg");
    circletype2.classList.remove("webext-mark-c923ncv39");
    circletype2.classList.remove("inb-mark-cs96g32d");
    circletype2.classList.remove("os-mark-209hf29");
    circlelabel2.innerText = "Desktop App";
    seconditem.style.display = "block";

    thirditem.style.display = "none";
    fourthitem.style.display = "none";
});

btnfinished.addEventListener("click", function () {
    if (wtmenubtn.classList.contains("active")) {
        h41outof5.innerText = "GDrive Download Link Generator";
        ptdesctext1.innerText = "Project is finished and there will likely be no future updates.";
        ghlink1.href = "https://github.com/MingTheNoob/GDriveDownloadLinkGenerator";
        progressicon1.classList.add("ri-check-double-line");
        progressicon1.classList.remove("ri-calendar-2-fill");
        mainlink1.href = "/web-tools/gdrive-dl-link-generator";
        circletype1.classList.add("webapp-mark-39f7cg");
        circletype1.classList.remove("webext-mark-c923ncv39");
        circletype1.classList.remove("inb-mark-cs96g32d");
        circletype1.classList.remove("os-mark-209hf29");
        circletype1.classList.remove("desktopapp-mark-f90h290");
        circlelabel1.innerText = "Web App";
        h42outof4.innerText = "QR Code Generator";
        ptdesctext2.innerText = "Project is finished and there may be future updates.";
        ghlink2.href = "https://github.com/MingTheNoob/QRCodeGenerator";
        progressicon2.classList.add("ri-check-double-line");
        progressicon2.classList.remove("ri-calendar-2-fill");
        mainlink2.href = "/web-tools/qr-code-generator";
        circletype2.classList.add("webapp-mark-39f7cg");
        circletype2.classList.remove("webext-mark-c923ncv39");
        circletype2.classList.remove("inb-mark-cs96g32d");
        circletype2.classList.remove("os-mark-209hf29");
        circletype2.classList.remove("desktopapp-mark-f90h290");
        circlelabel2.innerText = "Web App";
        seconditem.style.display = "block";
        thirditem.style.display = "block";
        fourthitem.style.display = "block";
    };

    btnfinished.classList.add("active");
    btnplanned.classList.remove("active");
});
btnplanned.addEventListener("click", function () {
    if (wtmenubtn.classList.contains("active")) {
        h41outof5.innerText = "SuperScript";
        ptdesctext1.innerText = "Development planned for some time next year. Release to be determined.";
        ghlink1.href = "https://github.com/MingTheNoob/SuperScript";
        progressicon1.classList.add("ri-calendar-2-fill");
        progressicon1.classList.remove("ri-check-double-line");
        mainlink1.href = "/web-tools/extensions/SuperScript";
        circletype1.classList.add("webext-mark-c923ncv39");
        circletype1.classList.remove("webapp-mark-39f7cg");
        circletype1.classList.remove("inb-mark-cs96g32d");
        circletype1.classList.remove("os-mark-209hf29");
        circletype1.classList.remove("desktopapp-mark-f90h290");
        circlelabel1.innerText = "Web Extension";
        seconditem.style.display = "none";
        thirditem.style.display = "none";
        fourthitem.style.display = "none";
    };

    btnplanned.classList.add("active");
    btnfinished.classList.remove("active");
});

h41outof5.addEventListener("click", function () {
    window.open(mainlink1);
});
h42outof5.addEventListener("click", function () {
    window.open(mainlink2);
});
h43outof5.addEventListener("click", function () {
    window.open(mainlink3);
});
h44outof5.addEventListener("click", function () {
    window.open(mainlink4);
});
h45outof5.addEventListener("click", function () {
    window.open(mainlink5);
});