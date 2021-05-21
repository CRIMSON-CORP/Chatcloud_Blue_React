import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function get(element) {
    return document.querySelector(element);
}
function getAll(element) {
    return document.querySelectorAll(element);
}

export function AllAnimations() {
    // Hero Section
    const span_blue = get("#hero span.bg");
    const slider = get(".hero_slider");

    //// Hero section Timelines
    const Hero_section_timeline = gsap.timeline();

    // navigation timeline Expanded

    // Hero section timeline Expanded
    Hero_section_timeline.to(span_blue, { opacity: 1, duration: 1 })
        .to(span_blue, { scaleX: 1, ease: "power4.inOut", duration: 2 }, "-=.75")
        .to(
            slider,
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                ease: "power4.inOut",
                duration: 1.5,
            },
            "-=1.5"
        );

    const ind_link = document.querySelector("#ind_dropList");
    ind_link.addEventListener("click", function (e) {
        if (ind_link && window.innerWidth < 1000) {
            e.preventDefault();
            gsap.to(".dropdown", { x: 0, duration: 0.75 });
            document.querySelector(".dropdown").classList.add("sublist_open");
        }
    });

    gsap.registerPlugin(ScrollTrigger);
    const items = gsap.utils.toArray(".grid_item");
    items.forEach((item) => {
        gsap.from(item, {
            scrollTrigger: item,
            y: 100,
            opacity: 0,
            start: "center bottom",
            duration: 1,
            scale: 0.5,
            transformOrigin: "center center",
            ease: "power4.Out",
            stagger: { each: 0.25 },
        });
    });
    const items_posts = gsap.utils.toArray("#posts .grid > div");
    items_posts.forEach((item_post) => {
        gsap.from(item_post, {
            scrollTrigger: item_post,
            y: 100,
            opacity: 0,
            start: "center bottom",
            duration: 1,
            scale: 0.5,
            transformOrigin: "center center",
            ease: "power4.Out",
        });
    });
    const headers = gsap.utils.toArray(".head-text");
    headers.forEach((item) => {
        gsap.from(item, {
            scrollTrigger: item,
            y: 100,
            opacity: 0,
            start: "center center",
            duration: 1,
            transformOrigin: "center center",
            ease: "power4.Out",
        });
    });

    const params = {
        y: 100,
        opacity: 0,
        start: "center bottom",
        duration: 1,
        transformOrigin: "center center",
        ease: "power4.Out",
    };

    gsap.to("#about", {
        scrollTrigger: "#about",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        start: "center center",
        duration: 1,
        transformOrigin: "center center",
        ease: "power4.Out",
    });

    gsap.from("#about p", {
        scrollTrigger: "#about p",
        ...params,
    });
    gsap.from("#start p", {
        scrollTrigger: "#start p",
        ...params,
    });
    gsap.from("#start button", {
        scrollTrigger: "#start button",
        ...params,
    });
    gsap.from("#industries p", {
        scrollTrigger: "#industries p",
        ...params,
    });
    gsap.from("#contact .form", {
        scrollTrigger: "#contact .form",
        ...params,
    });
}

export function NavBarAnim() {
    const line1 = get(".one");
    const line2 = get(".two");
    const line3 = get(".three");
    const ham = get("header svg");

    // NAV
    const Nav = get("nav");
    const NavLinks = getAll("nav a");
    // GSAP
    //// Navigation timelines
    const mobile_click = gsap.timeline({ reversed: true });
    const nav_timeline = gsap.timeline({ reversed: true });

    mobile_click
        .to(line2, 0.3, { scaleX: 0 })
        .to(line1, 0.3, { y: 19.5 }, "<.5", "anim")
        .to(line3, 0.3, { y: -19.25 }, "<", "anim")
        .to(ham, 0.3, { rotate: 360, ease: Power4 }, "spin")
        .to(line1, 0.3, { rotate: -45, transformOrigin: "50% 50%", y: 19.5 }, "x")
        .to(line3, 0.3, { rotate: 45, transformOrigin: "50% 50%", y: -19.25 }, "x");

    nav_timeline
        .to(Nav, { left: 0, opacity: 1, duration: 0.5 })
        .from(".navlinkItem > a", { y: 100, duration: 1, ease: "Power4.out()" })
        .to(".navlinkItem > a", { opacity: 1, duration: 0.75, ease: "Power4.out()" }, "-=.75");

    ham.addEventListener("click", (e) => {
        const dropdown = document.querySelector(".dropdown");
        if (dropdown.classList.contains("sublist_open")) {
            e.preventDefault();
            gsap.to(".dropdown", { x: "100%", duration: 0.75 });
            dropdown.classList.remove("sublist_open");
            return;
        }
        ham.classList.toggle("open");
        if (ham.classList.contains("open")) {
            mobile_click.play();
            nav_timeline.play();
        } else {
            mobile_click.reverse();
            nav_timeline.reverse();
        }
    });

    for (let index = 0; index < NavLinks.length; index++) {
        // eslint-disable-next-line no-loop-func
        NavLinks[index].addEventListener("click", function (e) {
            const dropdown = document.querySelector(".dropdown");
            if (this.id === "ind_dropList" && window.innerWidth < 1000) {
                console.log(1);
                e.preventDefault();
                gsap.to(".dropdown", { x: "0%", duration: 0.75 });
                dropdown.classList.add("sublist_open");
                return;
            } else {
                nav_timeline.reverse();
                mobile_click.reverse();
            }
        });
    }
}

export function ContactAnim() {
    gsap.to("#contact .info", {
        scrollTrigger: "#contact .info",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        start: "center center",
        duration: 2,
        transformOrigin: "center center",
        ease: "power4.inOut",
    });
    gsap.fromTo(
        "#contact .form",
        {
            scrollTrigger: "#contact .info",
            y: 100,
            opacity: 0,
            start: "center bottom",
            duration: 1,
            transformOrigin: "center center",
            ease: "power4.Out",
        },
        {
            y: 0,
            opacity: 1,
        }
    );
}
