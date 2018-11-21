
        var box_all = document.getElementById("box_all");
        var now_num;
        var now;
        var name;
        var w; //抓取螢幕的寬度
        var a;
        var abc;
        window.onload = function () {
            now_num = 0;
            now = "box_all_1";
            document.getElementById(now).style.display = "block";
            box_run(2);
            box_run(3);
            box_run(4);
            box_run(1);
    
        }

        function box_run(id) {

            name = 'box_all_' + id;
            if (name == now) {
                return 0;
            } else {
                w = document.body.clientWidth;
                document.getElementById(now).style.display = "none";
                document.getElementById(now).style.zIndex = 0;
                document.getElementById(name).style.display = "block";
                document.getElementById(name).style.zIndex = 1;
                console.log(w);
                var a = TweenMax.from('#' + name, 0.5, {
                    // scale: 0.6,
                    x: w,
                    ease: Back.easeOut,
                    oncomplete: final()

                });
            }

            // var hover_nav_L_box_content_show_text = TweenMax.to('#' + id, 0.2, {
            //     textShadow: "1px 1px 1px rgba(255, 255, 255, 0.5)",
            //     color: "#000"
            // });
            // // index = 200;
            // console.log(w);
            // index *= w;
            // index *= -1;
            // index = index + 'px';
            // console.log(index);
            // box_all.style.transform = "translate(" + index + ")";
        }

        function final() {
            now = name;
        }