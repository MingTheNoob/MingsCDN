var btnplanned = document.getElementById("btn-planned-f3v80h3");
var btnfinished = document.getElementById("btn-finished-1238ch78");
var webtoolsul = document.getElementById("wt-ul-9h29hfc29fn");
var ussbtn = document.getElementById("userscriptstyle-28yhr82hr");
var webextbtn = document.getElementById("webext-w8ihf892");
var codesnippetbtn = document.getElementById("codesnippet-92hf9h92d");
var randomappbtn = document.getElementById("randomapp-dh8c9h389");
var projecth2 = document.getElementById("projects-h2-29dhn92");
var addUssLiItem = `<li class="list-group-item-ifh29f2"><div class="media"><h4 id="h4-1outof4-2d9hfc29">Currently we have no userscripts or userstyles.</h4></div></li>`;
var addCodeSnippLiItem = `<li class="list-group-item-ifh29f2"><div class="media"><h4 id="h4-1outof4-2d9hfc29">Currently we have no code snippets.</h4></div></li>`;
var addWebExtLiItem = `
    <li id="4th-item-83hgft" class="list-group-item-ifh29f2">
        <div class="media">
            <a href="extensions/QuickLinks"><h4 id="h4-4outof4-83hv3v8" class="h4-project-title-2f9h2f">QuickLinks</h4></a>
            <div class="media-body">
                <i id="progress-icon-f83h8f3dw" class="ri-checkbox-circle-line"></i>
                <strong id="p-tdescription-3f7gw3gfx2">Project is in beta and there will be future updates.</strong>
                <div class="info">
                    <a id="a-href-github-72fdg7gd2" href="https://github.com/MingTheNoob/QuickLinks" target="_blank">
                        <i class="bi bi-github"></i>
                    </a>
                    &nbsp;&middot;&nbsp;
                    <a id="a-href-link-f823gh73g" href="/web-tools/extensions/QuickLinks" target="_blank">
                        <i class="bi bi-link-45deg"></i>
                    </a>
                    &nbsp;&middot;&nbsp;
                    <div id="circle-type-viesnv3" class="webext-mark-c923ncv39 btn-group">
                        <i class="bi bi-circle-fill"></i>
                        &nbsp;
                        <span id="circle-label-6a84fc6a1w">Web Extension</span>
                    </div>
                </div>
            </div>
        </div>
    </li>
`;
var addWebExt2LiItem = `
    <li id="4th-item-83hgft" class="list-group-item-ifh29f2">
        <div class="media">
            <a href="extensions/SuperScript"><h4 id="h4-4outof4-83hv3v8" class="h4-project-title-2f9h2f">SuperScript</h4></a>
            <div class="media-body">
                <i id="progress-icon-f83h8f3dw" class="ri-calendar-2-fill"></i>
                <strong id="p-tdescription-3f7gw3gfx2">
                    Development planned for some time next year. Release to be determined.
                </strong>
                <div class="info">
                    <a id="a-href-github-72fdg7gd2" href="https://github.com/MingTheNoob/SuperScript" target="_blank">
                        <i class="bi bi-github"></i>
                    </a>
                    &nbsp;&middot;&nbsp;
                    <a id="a-href-link-f823gh73g" href="/web-tools/extensions/SuperScript" target="_blank">
                        <i class="bi bi-link-45deg"></i>
                    </a>
                    &nbsp;&middot;&nbsp;
                    <div id="circle-type-viesnv3" class="webext-mark-c923ncv39 btn-group">
                        <i class="bi bi-circle-fill"></i>&nbsp;
                        <span id="circle-label-6a84fc6a1w">Web Extension</span>
                    </div>
                </div>
            </div>
        </div>
    </li>
`;
var addRandomAppLiItem = `
    <li class="list-group-item-ifh29f2">
        <div class="media">
            <a href="gdrive-dl-link-generator"><h4 id="h4-1outof4-2d9hfc29" class="h4-project-title-2f9h2f">GDrive Download Link Generator</h4></a>
            <div class="media-body">
                <i id="progress-icon-fo03h93hc" class="ri-check-double-line"></i>
                <strong id="p-tdescription-9dh29dn">
                    Project is finished and there will likely be no future updates.
                </strong>
                <div class="info">
                    <a id="a-href-github-209rd9n8d2" href="https://github.com/MingTheNoob/GDriveDownloadLinkGenerator" target="_blank">
                        <i class="bi bi-github"></i>
                    </a>
                    &nbsp;&middot;&nbsp;
                    <a id="a-href-link-f9h892" href="/web-tools/gdrive-dl-link-generator" target="_blank">
                        <i class="bi bi-link-45deg"></i>
                    </a>
                    &nbsp;&middot;&nbsp;
                    <div id="circle-type-9f2j45g" class="webapp-mark-39f7cg btn-group">
                        <i class="bi bi-circle-fill"></i>&nbsp;
                        <span id="circle-label-2d89hf29h">Web App</span>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li id="2nd-item-v98h30" class="list-group-item-ifh29f2">
        <div class="media">
            <a href="qr-code-generator"><h4 id="h4-2outof4-c8hve8a" class="h4-project-title-2f9h2f">QR Code Generator</h4></a>
            <div class="media-body">
                <i id="progress-icon-f893hus" class="ri-check-double-line"></i>
                <strong id="p-tdescription-2d9h2g4hg">
                    Project is finished and there may be future updates.
                </strong>
                <div class="info">
                    <a id="a-href-github-cv03q8hf" href="https://github.com/MingTheNoob/QRCodeGenerator" target="_blank">
                        <i class="bi bi-github"></i>
                    </a>
                    &nbsp;&middot;&nbsp;
                    <a id="a-href-link-8f3hu83b" href="/web-tools/qr-code-generator" target="_blank">
                        <i class="bi bi-link-45deg"></i>
                    </a>
                    &nbsp;&middot;&nbsp;
                    <div id="circle-type-viesnv3" class="webapp-mark-39f7cg btn-group">
                        <i class="bi bi-circle-fill"></i>&nbsp;
                        <span id="circle-label-6a84fc6a1w">Web App</span>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li id="3rd-item-f92h92" class="list-group-item-ifh29f2">
        <div class="media">
            <a href="pw-gen"><h4 id="h4-3outof4-v39hcv398" class="h4-project-title-2f9h2f">Password Generator</h4></a>
            <div class="media-body">
                <i id="progress-icon-9f2h9f2" class="ri-checkbox-circle-line"></i>
                <strong>
                    Project is finished and there will be future updates.
                </strong>
                <div class="info">
                    <a id="a-href-github-ic7gwc28g28" href="https://github.com/MingTheNoob/PasswordGenerator" target="_blank">
                        <i class="bi bi-github"></i>
                    </a>
                    &nbsp;&middot;&nbsp;
                    <a id="a-href-link-03h8vc8nv" href="/web-tools/pw-gen" target="_blank">
                        <i class="bi bi-link-45deg"></i>
                    </a>
                    &nbsp;&middot;&nbsp;
                    <div class="webapp-mark-39f7cg btn-group">
                        <i class="bi bi-circle-fill"></i>&nbsp;
                        <span>Web App</span>
                    </div>
                </div>
            </div>
        </div>
    </li>
`;

ussbtn.addEventListener("click", function() {
    btnfinished.classList.add("disabled");
    btnplanned.classList.add("disabled");
    btnfinished.classList.remove("active");
    btnplanned.classList.remove("active");
    btnfinished.innerHTML = "0 Userscripts";
    btnplanned.innerHTML = "0 Userstyles";

    webextbtn.classList.remove("active");
    codesnippetbtn.classList.remove("active");
    randomappbtn.classList.remove("active");
    ussbtn.classList.add("active");

    projecth2.innerHTML = "Userscripts & Userstyles";
    webtoolsul.innerHTML = addUssLiItem;
});

webextbtn.addEventListener("click", function() {
    btnfinished.classList.remove("disabled");
    btnplanned.classList.remove("disabled");
    btnfinished.classList.add("active");
    btnplanned.classList.remove("active");
    btnfinished.innerHTML = "1 Finished";
    btnplanned.innerHTML = "1 Planned";

    webextbtn.classList.add("active");
    ussbtn.classList.remove("active");
    codesnippetbtn.classList.remove("active");
    randomappbtn.classList.remove("active");

    projecth2.innerHTML = "Web Extensions";
    webtoolsul.innerHTML = addWebExtLiItem;
});
codesnippetbtn.addEventListener("click", function() {
    btnfinished.classList.add("disabled");
    btnplanned.classList.add("disabled");
    btnfinished.classList.remove("active");
    btnplanned.classList.remove("active");
    btnfinished.innerHTML = "0 Finished";
    btnplanned.innerHTML = "0 Planned";

    webextbtn.classList.remove("active");
    ussbtn.classList.remove("active");
    codesnippetbtn.classList.add("active");
    randomappbtn.classList.remove("active");

    projecth2.innerHTML = "Code Snippets";
    webtoolsul.innerHTML = addCodeSnippLiItem;
});
randomappbtn.addEventListener("click", function() {
    btnfinished.classList.remove("disabled");
    btnplanned.classList.add("disabled");
    btnfinished.classList.add("active");
    btnplanned.classList.remove("active");
    btnfinished.innerHTML = "3 Finished";
    btnplanned.innerHTML = "0 Planned";

    randomappbtn.classList.add("active");
    ussbtn.classList.remove("active");
    webextbtn.classList.remove("active");
    codesnippetbtn.classList.remove("active");

    projecth2.innerHTML = "Random Apps";
    webtoolsul.innerHTML = addRandomAppLiItem;
});

btnplanned.addEventListener("click", function() {
    btnfinished.classList.remove("active");
    btnplanned.classList.add("active");
    if (webextbtn.classList.contains("active")) {
        webtoolsul.innerHTML = addWebExt2LiItem;
    }
});
btnfinished.addEventListener("click", function() {
    btnplanned.classList.remove("active");
    btnfinished.classList.add("active");

    if (webextbtn.classList.contains("active")) {
        webtoolsul.innerHTML = addWebExtLiItem;
    }
});