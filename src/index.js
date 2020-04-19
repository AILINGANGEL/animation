class Ball {
    constructor(radius, color='red'){
        this.width = radius * 2;
        this.height = radius * 2;
        this.color = color;
        this.timer = null;
        this.leftPos = 0;
        this.init();
    }
    init(){
        this.el = document.createElement('div');
        this.el.style.width = this.width + 'px';
        this.el.style.height = this.height + 'px';
        this.el.style.borderRadius = '50%';
        this.el.style.background = this.color;
        this.el.style.position = 'absolute';
        this.el.style.left = this.leftPos + 'px';
        document.body.appendChild(this.el);
    }
    move(){
        if(!this.timer) {
            this.timer = setInterval(() => {
                this.leftPos++;
                if(this.leftPos + this.width <document.body.clientWidth) {
                    this.el.style.left = this.leftPos + 'px';
                } else {
                    clearInterval(this.timer);
                }
            }, 20);
        }
    }
}

let movingBall = new Ball(50);
movingBall.move();