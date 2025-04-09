/*
    Булька булька барабулька
*/

class CoolHeaderFavicon {
    element;
    currentIconElement;
    icons = {};
    currentIconTag;

    constructor(element, icons, currentIconTag) {
        this.element = element;
        this.icons = icons;
        this.currentIconTag = currentIconTag;

        this.speed = 0.3;
        this.CSS = {
            width: "48px",
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            transitionDuration: `${this.speed}s`
        }

        Object.assign(this.element.style, this.CSS);
    }

    setIconToPosition(icon, animationDirection, type) {
        icon.style.opacity = "0";
        switch (animationDirection) {
            case "up":
                icon.style.transform = `translateY(${type === "show" ? "" : "-"}${this.CSS.height})`;
                break
            case "down":
                icon.style.transform = `translateY(${type === "show" ? "-" : ""}${this.CSS.height})`;
                break
            case "right":
                icon.style.transform = `translateX(${type === "show" ? "-" : ""}${this.CSS.width})`;
                break
            case "left":
                icon.style.transform = `translateX(${type === "show" ? "" : "-"}${this.CSS.width})`;
                break
            case "scaleIn":
                icon.style.transform = `scale(${type === "show" ? "0" : "1.5"})`;
                break
            case "scaleOut":
                icon.style.transform = `scale(${type === "show" ? "1.5" : "0"})`;
                break
        }
        icon.style.transitionDuration = `${this.speed}s`;
    }

    setIconToCenter(icon) {
        icon.style.transform = ""
        icon.style.opacity = "1"
    }

    showCurrentIcon() {
        const currentIconParams = this.icons[this.currentIconTag];

        this.currentIconElement = document.createElement(`div`)

        this.element.innerHTML = "";
        this.element.style.backgroundColor = currentIconParams.bgColor;

        if (currentIconParams.imageType === "CSSClass") {
            this.currentIconElement.classList.add(currentIconParams.image)
        } else if (currentIconParams.imageType === "URL") {
            Object.assign(this.currentIconElement.style, {
                backgroundImage: `url('${currentIconParams.image}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: this.CSS.width,
                height: this.CSS.height
            });
        }

        this.setIconToPosition(this.currentIconElement, currentIconParams.showAnimationDirection, "show");
        this.element.appendChild(this.currentIconElement)

        setTimeout(() => {
            this.setIconToCenter(this.currentIconElement)
        }, this.speed * 1000)
    }

    changeIcon(iconTag) {
        let currentIconParams = this.icons[this.currentIconTag]
        this.currentIconTag = iconTag

        this.element.style.backgroundColor = this.icons[this.currentIconTag].bgColor;

        this.setIconToPosition(this.element.children[0], currentIconParams.hideAnimationDirection, "hide");

        setTimeout(() => {
            this.showCurrentIcon()
        }, this.speed * 1000)
    }
}