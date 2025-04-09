let headerIcon

const icons = {
    heart: {
        imageType: "CSSClass", // CSSClass, URL
        image: "icon-heart",
        bgColor: "#FFDADA",
        showAnimationDirection: "scaleOut",   // up, down, left, right, scaleIn, scaleOut
        hideAnimationDirection: "scaleOut"    // up, down, left, right, scaleIn, scaleOut
    },
    tg: {
        imageType: "CSSClass",
        image: "header-icon-tg",
        bgColor: "#35a8dd",
        showAnimationDirection: "right",
        hideAnimationDirection: "right"
    },
    gmail: {
        imageType: "CSSClass",
        image: "header-icon-gmail",
        bgColor: "#ffffff",
        showAnimationDirection: "up",
        hideAnimationDirection: "scaleOut"
    },
    gh: {
        imageType: "CSSClass",
        image: "header-icon-gh",
        bgColor: "#1b1f23",
        showAnimationDirection: "up",
        hideAnimationDirection: "down"
    }
};

const coolHeaderIconInit = (elems, headerIcon) => {
    for (let i of elems) {
        document.getElementById(i.buttonId).addEventListener("mouseover", () => {
            headerIcon.changeIcon(i.iconTag)
        });
        document.getElementById(i.buttonId).addEventListener("mouseout", () => {
            headerIcon.changeIcon("heart")
        });
    }
}

window.addEventListener('load', () => {
    headerIcon = new CoolHeaderFavicon(document.getElementById("coolHeaderIcon"), icons, "heart")
    headerIcon.showCurrentIcon()

    coolHeaderIconInit([
        { buttonId: "tgButton", iconTag: "tg" },
        { buttonId: "gmailButton", iconTag: "gmail" },
        { buttonId: "ghButton", iconTag: "gh" }
    ], headerIcon)

    bobatron.scanner()
    setTimeout(() => {
       bobatron.scanner()
    }, 1111)
})

window.addEventListener('resize', () => {
    bobatron.scanner()
})