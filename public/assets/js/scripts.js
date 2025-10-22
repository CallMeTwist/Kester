window.initThemeScripts = function () {

    $(function () {
        "use strict";

        var wind = $(window);

        /* =============================================================================
        -----------------------------  Navbar Menu Toggle   -----------------------------
        ============================================================================= */
        if (!window.__navbarTogglerFixed) {
            window.__navbarTogglerFixed = true;

            $(".navbar")
                .off(".navToggleTheme")
                .on("click.navToggleTheme", ".navbar-toggler", function () {
                    $(".navbar .bg").slideToggle();
                });
        }

        /* =============================================================================
        -----------------------------  Navbar Scroll Effect  -----------------------------
        ============================================================================= */
        if (!window.__navbarScrollBound) {
            window.__navbarScrollBound = true;

            wind.off("scroll.navScrollTheme").on("scroll.navScrollTheme", function () {
                const bodyScroll = wind.scrollTop(),
                    navbar = $(".navbar-chang");

                if (bodyScroll > 300) {
                    navbar.addClass("nav-scroll");
                } else {
                    navbar.removeClass("nav-scroll");
                }
            });
        }

        /* =============================================================================
        -----------------------------  Fixed Menu Tabs  -----------------------------
        ============================================================================= */
        $(".fixed-menu .menu-links a")
            .off("click.fixedMenuTheme")
            .on("click.fixedMenuTheme", function () {
                const tab_id = $(this).attr("data-tab");
                $(".fixed-menu .menu-links a").removeClass("active");
                $(this).addClass("active");

                $(".min-box .min-sec").removeClass("current");
                $("#" + tab_id).addClass("current");
            });

        /* =============================================================================
        -----------------------------  Data Backgrounds  -----------------------------
        ============================================================================= */
        $(".bg-img, section").each(function () {
            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

        /* =============================================================================
        -----------------------------  Tabs  -----------------------------
        ============================================================================= */
        $("#tabs .tab-links")
            .off("click.tabsTheme")
            .on("click.tabsTheme", ".item-link", function () {
                const tab_id = $(this).attr("data-tab");
                $("#tabs .tab-links .item-link").removeClass("current");
                $(this).addClass("current");
                $(".tab-content").hide();
                $("#" + tab_id).show();
            });

        $("#tabs-fade .tab-links")
            .off("click.tabsFadeTheme")
            .on("click.tabsFadeTheme", ".item-link", function () {
                const tab2_id = $(this).attr("data-tab");
                $("#tabs-fade .tab-links .item-link").removeClass("current");
                $(this).addClass("current");
                $(".tab-content").fadeOut();
                $("#" + tab2_id).fadeIn();
            });

        /* =============================================================================
        -----------------------------  Accordion  -----------------------------
        ============================================================================= */
        $(".accordion")
            .off("click.accordionTheme")
            .on("click.accordionTheme", ".title", function () {
                $(this).next().slideDown();
                $(".accordion-info").not($(this).next()).slideUp();
            });

        $(".accordion")
            .off("click.accordionTheme2")
            .on("click.accordionTheme2", ".item", function () {
                $(this).addClass("active").siblings().removeClass("active");
            });

        /* =============================================================================
        -----------------------------  Tooltip Hover  -----------------------------
        ============================================================================= */
        $('[data-tooltip-tit]')
            .off("mouseenter.tooltipTheme mouseleave.tooltipTheme mousemove.tooltipTheme")
            .on("mouseenter.tooltipTheme", function () {
                $('<div class="div-tooltip-tit"></div>')
                    .text($(this).attr("data-tooltip-tit"))
                    .appendTo("body")
                    .fadeIn("slow");
            })
            .on("mouseleave.tooltipTheme", function () {
                $(".div-tooltip-tit").remove();
            })
            .on("mousemove.tooltipTheme", function (e) {
                $(".div-tooltip-tit").css({ top: e.pageY + 10, left: e.pageX + 20 });
            });

        /* =============================================================================
        -----------------------------  Progress Bar Scroll  -----------------------------
        ============================================================================= */
        wind.off("scroll.progressTheme").on("scroll.progressTheme", function () {
            $(".skill-progress .progres").each(function () {
                const bottom_of_object = $(this).offset().top + $(this).outerHeight();
                const bottom_of_window = $(window).scrollTop() + $(window).height();
                const myVal = $(this).attr("data-value");
                if (bottom_of_window > bottom_of_object) {
                    $(this).css({ width: myVal });
                }
            });
        });

        /* =============================================================================
        -----------------------------  Trigger Plugins  -----------------------------
        ============================================================================= */
        $("#sticky_item").stick_in_parent();
        $("a.vid").YouTubePopUp();
        $(".parallaxie").parallaxie({ speed: 0.8, size: "cover" });
        $(".popup-img , .gallery").magnificPopup({
            delegate: ".popimg",
            type: "image",
            gallery: { enabled: true },
        });
        $(".hover3d").hover3d({ selector: ".hover3d-child", invert: true });
        $(".number-sec .count").countUp({ delay: 10, time: 500 });
        Splitting();

        /* =============================================================================
        -----------------------------  Wow.js Init  -----------------------------
        ============================================================================= */
        const wow = new WOW({ animateClass: "animated", offset: 100 });
        wow.init();

        /* =============================================================================
        -----------------------------  Cursor Animation  -----------------------------
        ============================================================================= */
        (function () {
            const link = document.querySelectorAll(".hover-this");
            const cursor = document.querySelector(".cursor");

            const animateit = function (e) {
                const hoverAnim = this.querySelector(".hover-anim");
                const { offsetX: x, offsetY: y } = e,
                    { offsetWidth: width, offsetHeight: height } = this,
                    move = 25,
                    xMove = (x / width) * (move * 2) - move,
                    yMove = (y / height) * (move * 2) - move;
                hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
                if (e.type === "mouseleave") hoverAnim.style.transform = "";
            };

            const editCursor = (e) => {
                const { clientX: x, clientY: y } = e;
                cursor.style.left = x + "px";
                cursor.style.top = y + "px";
            };

            link.forEach((b) => b.addEventListener("mousemove", animateit));
            link.forEach((b) => b.addEventListener("mouseleave", animateit));
            window.addEventListener("mousemove", editCursor);

            $("a, .cursor-pointer").hover(
                function () {
                    $(".cursor").addClass("cursor-active");
                },
                function () {
                    $(".cursor").removeClass("cursor-active");
                }
            );
        })();

        /* =============================================================================
        -----------------------------  Window Load (Preloader + Isotope) -----------------------------
        ============================================================================= */

        function runPreloaderAndIsotope() {
            const body = $("body");
            const preloader = $(".loader-wrap");

            // Make sure body has the initial 'loaded' state like original template
            if (!body.hasClass("loaded")) {
                body.addClass("loaded");
            }

            // If GSAP is available and the SVG exists, run the timeline that the original template used
            const svg = document.getElementById("svg");
            if (window.gsap && svg) {
                try {
                    const tl = gsap.timeline();

                    // the same curve strings from the original template
                    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
                    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

                    // replicate the original sequence
                    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
                        delay: 1.5,
                        y: -100,
                        opacity: 0,
                    });
                    tl.to(svg, {
                        duration: 0.5,
                        attr: { d: curve },
                        ease: "power2.easeIn",
                    });
                    tl.to(svg, {
                        duration: 0.5,
                        attr: { d: flat },
                        ease: "power2.easeOut",
                    });
                    // slide loader up and hide it
                    tl.to(".loader-wrap", { duration: 0.6, y: -1500 });
                    tl.to(".loader-wrap", {
                        duration: 0.05,
                        zIndex: -1,
                        display: "none",
                        onComplete: function () {
                            // mirror original: remove the 'loaded' state so any CSS transitions tied to it run
                            body.removeClass("loaded");
                            // remove element from DOM to avoid blocking or accidental overlays
                            preloader.remove();
                        },
                    });
                } catch (err) {
                    // If something goes wrong with GSAP, fallback to safe behavior
                    console.warn("GSAP timeline failed, falling back to simple preloader hide:", err);
                    body.removeClass("loaded");
                    preloader.fadeOut(600, () => preloader.remove());
                }
            } else {
                // Fallback: do the class toggle + fade behavior (keeps compatibility)
                // Add a small delay so the user sees the loader briefly
                setTimeout(() => {
                    body.removeClass("loaded");
                    preloader.fadeOut(600, () => preloader.remove());
                }, 1500);
            }

            // Initialize isotope safely
            if ($(".gallery").length) {
                const $gallery = $(".gallery").isotope({ itemSelector: ".items" });

                $(".filtering")
                    .off("click.filterTheme")
                    .on("click.filterTheme", "span", function () {
                        const filterValue = $(this).attr("data-filter");
                        $gallery.isotope({ filter: filterValue });
                        $(this).addClass("active").siblings().removeClass("active");
                    });
            }
        }

// ✅ Run immediately if document already loaded (React behavior)
        if (document.readyState === "complete") {
            runPreloaderAndIsotope();
        } else {
            $(window).off("load.loadTheme").on("load.loadTheme", runPreloaderAndIsotope);
        }



        /* =============================================================================
        -----------------------------  Contact Form Submit -----------------------------
        ============================================================================= */
        $("#contact-form")
            .validator()
            .off("submit.contactTheme")
            .on("submit.contactTheme", function (e) {
                if (!e.isDefaultPrevented()) {
                    const url = "contact.php";
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: $(this).serialize(),
                        success: function (data) {
                            const messageAlert = "alert-" + data.type;
                            const messageText = data.message;
                            const alertBox = `<div class="alert ${messageAlert} alert-dismissable">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        ${messageText}</div>`;
                            if (messageAlert && messageText) {
                                $("#contact-form")
                                    .find(".messages")
                                    .html(alertBox);
                                $("#contact-form")[0].reset();
                            }
                        },
                    });
                    return false;
                }
            });


        /* =============================================================================
        -----------------------------  Button Scroll Up  -----------------------------
        ============================================================================= */
        $(document).ready(function () {
            const progressPath = document.querySelector(".progress-wrap path");
            const pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = "none";
            progressPath.style.strokeDasharray = pathLength + " " + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

            const updateProgress = function () {
                const scroll = $(window).scrollTop();
                const height = $(document).height() - $(window).height();
                const progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
            };

            updateProgress();
            $(window).off("scroll.scrollUpTheme").on("scroll.scrollUpTheme", function () {
                updateProgress();
                if ($(this).scrollTop() > 150) {
                    $(".progress-wrap").addClass("active-progress");
                } else {
                    $(".progress-wrap").removeClass("active-progress");
                }
            });

            $(".progress-wrap")
                .off("click.scrollUpTheme")
                .on("click.scrollUpTheme", function (event) {
                    event.preventDefault();
                    $("html, body").animate({ scrollTop: 0 }, 550);
                    return false;
                });
        });
    });
};
