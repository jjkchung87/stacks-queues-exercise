class Site {
    constructor(url){
        this.url=url;
        this.previous = null;
        this.next = null;
    }
}

class BackStack {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    addSite(url){
        const newSite = new Site(url)
        if(this.isEmpty()) {
            this.tail = newSite;
        } else {
            newSite.next = this.head;
            this.head.previous = newSite;
        }
        this.head = newSite;   
        this.size ++;
    }

    removeSite(){
        if(this.isEmpty()) throw new Error('Back stack is empty')

        if(this.head === this.tail){
            this.tail = null;
        }
        this.head = this.head.next;
        this.head.previous = null;
        this.size --;
    }


}

// class ForwardStack {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0;
//     }

//     addSite(url){
//         const newSite = new Site(url)
//         if(this.isEmpty()) {
//             this.tail = newSite;
//         } else {
//             newSite.next = this.head;
//             this.head.previous = newSite;
//         }
//         this.head = newSite;   
//         this.size ++;
//     }

//     removeSite(){
//         if(this.isEmpty()) throw new Error('Forward stack is empty')

//         if(this.head === this.tail){
//             this.tail = null;
//         }
//         this.head = this.head.next;
//         this.head.previous = null;
//         this.size --;
//     }
// }


const backStack = new BackStack()
const forwardStack = new ForwardStack()



// User visits Google
// User vists Yahoo; Google goes to backStack
backStack.addSite("http://www.google.com")

// User visits Ebay; Yahoo goes to backStack
backStack.addSite("http://www.yahoo.com")

// User goes back to Yahoo; Ebay goes to forward stack
backStack.removeSite()
forwardStack.addSite("http://www.ebay.com")

// User goes back to Google; Yahoo goes to forward stack
backStack.removeSite()
forwardStack.addSite("http://www.yahoo.com")


