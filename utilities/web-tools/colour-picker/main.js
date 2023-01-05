var colourPicker = new iro.ColorPicker('#colourPicker', {
    width: 320,
    color: "#696969",
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
        {
            component: iro.ui.Box,
        },
        {
            component: iro.ui.Slider,
            options: {
                sliderType: 'hue'
            }
        }
    ]
});

var values = document.getElementById('colour-picker-values');
var hexInput = document.getElementById('colour-picker-hexInput');

colourPicker.on(["color:init", "color:change"], function(color) {
    values.innerHTML = `
        <div class="colour-picker-value">
            <code id="hexCodeId">Hex:</code> <small id="hexCodeIdValue">${color.hexString}</small> &nbsp; | &nbsp; <code id="hex8CodeId">Hex8:</code> <small id="hex8CodeIdValue">${color.hex8String}</small>
            <br>
            <br>
            <code id="rgbCodeId">RGB:</code> <small id="rgbCodeIdValue">${color.rgbString}</small> &nbsp; | &nbsp; <code id="rgbaCodeId">RGBA:</code> <small id="rgbaCodeIdValue">${color.rgbaString}</small>
            <br>
            <br>
            <code id="hslCodeId">HSL:</code> <small id="hslCodeIdValue">${color.hslString}</small> &nbsp; | &nbsp; <code id="hslaCodeId">HSLA:</code> <small id="hslaCodeIdValue">${color.hslaString}</small>
        </div>
    `;

    hexInput.value = color.hexString;
});

hexInput.addEventListener('change', function() {
    colourPicker.color.hexString = this.value;
});

var hexCodeId = document.getElementById('hexCodeId');
var hex8CodeId = document.getElementById('hex8CodeId');
var rgbCodeId = document.getElementById('rgbCodeId');
var rgbaCodeId = document.getElementById('rgbaCodeId');
var hslCodeId = document.getElementById('hslCodeId');
var hslaCodeId = document.getElementById('hslaCodeId');

var hexCodeIdValue = document.getElementById('hexCodeIdValue');
var hex8CodeIdValue = document.getElementById('hex8CodeIdValue');
var rgbCodeIdValue = document.getElementById('rgbCodeIdValue');
var rgbaCodeIdValue = document.getElementById('rgbaCodeIdValue');
var hslCodeIdValue = document.getElementById('hslCodeIdValue');
var hslaCodeIdValue = document.getElementById('hslaCodeIdValue');

var copyButton = document.getElementById('colour-picker-copyValue');
var clipboardStatusMsg = document.getElementById('clipboardStatusMsg');

new ClipboardJS('#colour-picker-copyValue');
new ClipboardJS('#hexCodeId');
new ClipboardJS('#hex8CodeId');
new ClipboardJS('#rgbCodeId');
new ClipboardJS('#rgbaCodeId');
new ClipboardJS('#hslCodeId');
new ClipboardJS('#hslaCodeId');

copyButton.setAttribute('data-clipboard-text', hexInput.value);
hexCodeId.setAttribute('data-clipboard-text', hexCodeIdValue.textContent);
hex8CodeId.setAttribute('data-clipboard-text', hex8CodeIdValue.textContent);
rgbCodeId.setAttribute('data-clipboard-text', rgbCodeIdValue.textContent);
rgbaCodeId.setAttribute('data-clipboard-text', rgbaCodeIdValue.textContent);
hslCodeId.setAttribute('data-clipboard-text', hslCodeIdValue.textContent);
hslaCodeId.setAttribute('data-clipboard-text', hslaCodeIdValue.textContent);

copyButton.addEventListener('click', copyNewValue);
function copyNewValue() {
	setTimeout(function() {
		copyButton.setAttribute('data-clipboard-text', hexInput.value);
	}, 100);
	clipboardStatusMsg.innerHTML = 'Copied! <i class="ri-check-fill"></i>';
};
hexInput.addEventListener('mouseleave', function() {
    copyButton.setAttribute('data-clipboard-text', hexInput.value);
    hexCodeId.setAttribute('data-clipboard-text', hexCodeIdValue.textContent);
    hex8CodeId.setAttribute('data-clipboard-text', hex8CodeIdValue.textContent);
    rgbCodeId.setAttribute('data-clipboard-text', rgbCodeIdValue.textContent);
    rgbaCodeId.setAttribute('data-clipboard-text', rgbaCodeIdValue.textContent);
    hslCodeId.setAttribute('data-clipboard-text', hslCodeIdValue.textContent);
    hslaCodeId.setAttribute('data-clipboard-text', hslaCodeIdValue.textContent);
});
hexInput.addEventListener('click', function() {
    clipboardStatusMsg.innerHTML = "";
});


hexCodeId.addEventListener('click', copyNewValueHexId);
function copyNewValueHexId() {
    setTimeout(function() {
        hexCodeId.setAttribute('data-clipboard-text', hexCodeIdValue.textContent);
    }, 100);
    clipboardStatusMsg.innerHTML = 'Copied! <i class="ri-check-fill"></i>';
};
hex8CodeId.addEventListener('click', copyNewValueHex8Id);
function copyNewValueHex8Id() {
    setTimeout(function() {
        hex8CodeId.setAttribute('data-clipboard-text', hex8CodeIdValue.textContent);
    }, 100);
    clipboardStatusMsg.innerHTML = 'Copied! <i class="ri-check-fill"></i>';
}
rgbCodeId.addEventListener('click', copyNewValueRgbId);
function copyNewValueRgbId() {
    setTimeout(function() {
        rgbCodeId.setAttribute('data-clipboard-text', rgbCodeIdValue.textContent);
    }, 100);
    clipboardStatusMsg.innerHTML = 'Copied! <i class="ri-check-fill"></i>';
}
rgbaCodeId.addEventListener('click', copyNewValueRgbaId);
function copyNewValueRgbaId() {
    setTimeout(function() {
        rgbaCodeId.setAttribute('data-clipboard-text', rgbaCodeIdValue.textContent);
    }, 100);
    clipboardStatusMsg.innerHTML = 'Copied! <i class="ri-check-fill"></i>';
}
hslCodeId.addEventListener('click', copyNewValueHslId);
function copyNewValueHslId() {
    setTimeout(function() {
        hslCodeId.setAttribute('data-clipboard-text', hslCodeIdValue.textContent);
    }, 100);
    clipboardStatusMsg.innerHTML = 'Copied! <i class="ri-check-fill"></i>';
}
hslaCodeId.addEventListener('click', copyNewValueHslaId);
function copyNewValueHslaId() {
    setTimeout(function() {
        hslaCodeId.setAttribute('data-clipboard-text', hslaCodeIdValue.textContent);
    }, 100);
    clipboardStatusMsg.innerHTML = 'Copied! <i class="ri-check-fill"></i>';
}