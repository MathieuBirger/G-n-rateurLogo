const getBaseURL = () => {
    return new URL('.', import.meta.url);
};

class MyLogo extends HTMLElement {
    style = `
    @import url('https://fonts.googleapis.com/css2?family=Grey+Qo&display=swap');

    #logo {
        font-family: 'Grey Qo', cursive;
    }
    .flex-container {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        }
    .flex-item-center {
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
        }
    .focus-in-expand {
        -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .focus-in-expand-fwd {
        -webkit-animation: focus-in-expand-fwd 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: focus-in-expand-fwd 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .tracking-in-expand {
        -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
                animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
    /* ----------------------------------------------
 * Generated by Animista on 2021-9-13 11:7:37
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation focus-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
    #logo {
        color:red;
        font-size: 40px;
        
    }

    /* ----------------------------------------------
 * Generated by Animista on 2021-9-20 9:19:32
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation focus-in-expand-fwd
 * ----------------------------------------
 */
@-webkit-keyframes focus-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
            transform: translateZ(-800px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes focus-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
            transform: translateZ(-800px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-9-20 9:22:2
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tracking-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

    `;
    html = `
    <div id="logo" class="flex-container">
    <div class="flex-item-center" id="textLogo">mon logo 2</div>
    <!-- <img src="./images/flammes.jpg" width=200> -->
    </div>
    <br>
    <h1>Logo</h1>
    Hauteur : 30 <input type="range" value=300 min=30 max=600 id="selecteurHauteur"> 600
        <br>
        Largeur : 30 <input type="range" value=300 min=30 max=1200 id="selecteurLargeur"> 1200
        <br>
        URL de l'image de fond : <input type="urlImage"id="urlImage">
    <h1>Bordure du logo</h1>
    
        Largeur : 0 <input type="range" value=0 min=0 max=20 id="selecteurLargeurBordure"> 20
        <br>
        Couleur : <input type="color" id="selecteurCouleurBordure">
        <br>
        Radius : 0 <input type="range" value=0 min=0 max=20 id="selecteurRadiusBordure"> 20
        <br>
    <h1>Text du logo</h1>
        Couleur : <input type="color" id="selecteurCouleur">
        <br>
        Taille : 5 <input type="range" value=40 min=5 max=100 id="selecteurTaille"> 100
        <br>
        Text : <input type="textBox"id="inputTextLogo">
        <br>
    <button id="sauvegarder"> Sauvegarder </button>
    <button id="charger"> Charger </button>
    `;

    constructor() {
    
        super();
        // On crée le "shadow DOM"
        this.attachShadow({ mode: "open" });

        // récupérer les propriétés/attributs HTML
        this.couleur = this.getAttribute("couleur");
        if (!this.couleur) this.couleur = "black";

        if (!this.couleurBordure) this.couleurBordure = "black";

        console.log("couleur récupérée = " + this.couleur);

        this.text = this.getAttribute("text");
        this.animationClass = this.getAttribute("animation");
        this.controls = this.getAttribute("controls");
        this.size = this.getAttribute("size");
        //this.tryToValorise();
    }
    tryToValorise(){
        let parametres = new URLSearchParams(window.location.search);
         console.log(parametres.entries())
         
             for (let p of parametres.entries()) {
                 console.log(p);
                 if(p[0]=="changeCouleur") {
                     this.changeCouleur("#"+p[1]);
                     console.log(p[1])
                 }
                 if(p[0]=="urlImageValue") {
                    console.log(decodeURI(p[1]))
                     console.log(p[1])

                     console.log(this.utf8_to_str(p[1]))
                    this.setUrlImage(this.utf8_to_str(p[1]));
                   
                }
                if(p[0]=="changeSizeValue") {
                    this.changeSize(+p[1]);
                    console.log(p[1])
                }
          
     }
     
    }
     utf8_to_str(a) {
       
        return decodeURIComponent(a)
    }
     sauvegarder(){
         
        var searchParams = new URLSearchParams("");
        if(this.changeCouleurvalue ) {
            searchParams.append("changeCouleur", this.changeCouleurvalue);
        }
        if(this.urlImageValue ) {
            searchParams.append("urlImageValue", this.urlImageValue)
        
        }
        if(this.changeSizeValue ) {
            searchParams.append("changeSizeValue", this.changeSizeValue)
        }
        
        
        this.savedURL = window.location+"?"+encodeURI(searchParams);
        
       /* var copyText = document.getElementById("savedURL");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");*/
       
        console.log(encodeURI(this.savedURL));
        this.active = true;
    }
    connectedCallback() {
        // ici on instancie l'interface graphique etc.
        this.shadowRoot.innerHTML = `<style>${this.style}</style>`
            + this.html;

        this.textLogo = this.shadowRoot.querySelector("#textLogo");
        this.logo = this.shadowRoot.querySelector("#logo");
        // affecter les valeurs des attributs à la création
        this.logo.style.color = this.couleur;
        this.logo.classList.add(this.animationClass);
        this.declareEcouteurs();

        // On modifie les URLs relatifs
        this.fixRelativeURLs();
    }

    fixRelativeURLs() {
        let images = this.shadowRoot.querySelectorAll('img');
        images.forEach((e) => {
            console.log("dans le foreach")
            let imagePath = e.getAttribute('src');
            e.src = getBaseURL() + '/' + imagePath;
        });

        //console.log(getBaseURL() +  "images/flammes.jpg")
        this.logo.style.background = "url(" + getBaseURL() + "images/flammes.jpg)";
    }

    declareEcouteurs() {
        this.shadowRoot.querySelector("#selecteurCouleur")
            .addEventListener("input", (event) => {
                this.changeCouleur(event.target.value);
            });

        this.shadowRoot.querySelector("#selecteurTaille")
            .addEventListener("input", (event) => {
                this.changeSize(event.target.value);
            });
        this.shadowRoot.querySelector("#selecteurHauteur")
            .addEventListener("input", (event) => {
                this.changeHauteur(event.target.value);
            });
        this.shadowRoot.querySelector("#selecteurLargeur")
            .addEventListener("input", (event) => {
                this.changeLargeur(event.target.value);
            });
        
        this.shadowRoot.querySelector("#selecteurLargeurBordure")
            .addEventListener("input", (event) => {
                this.changeLargeurBordure(event.target.value);
            });
            this.shadowRoot.querySelector("#selecteurCouleurBordure")
            .addEventListener("input", (event) => {
                this.changeCouleurBordure(event.target.value);
            });
            this.shadowRoot.querySelector("#inputTextLogo")
            .addEventListener("input", (event) => {
                this.changerTextLogo(event.target.value);
            });
            this.shadowRoot.querySelector("#selecteurRadiusBordure")
            .addEventListener("input", (event) => {
                this.selecteurRadiusBordure(event.target.value);
            });
            this.shadowRoot.querySelector("#urlImage")
            .addEventListener("input", (event) => {
                this.setUrlImage(event.target.value);
            });
            this.shadowRoot.querySelector("#sauvegarder")
            .addEventListener("click", () => {
                this.sauvegarder();
            });
            this.shadowRoot.querySelector("#charger")
            .addEventListener("click", () => {
                this.tryToValorise();
            });
    }


    // Fonction
    changeCouleur(val) {
        this.logo.style.color = val;
        this.changeCouleurvalue = val.substring(1);
    }

    changeSize(val) {
        this.logo.style.fontSize = val + "px";
        this.changeSize = val;
        this.changeSizeValue = val;
    }
    changeLargeur(val) {
        this.logo.style.width = val + "px";
        this.changeLargeurValue = val;
    }
    changeHauteur(val) {
        this.logo.style.height = val + "px";
        this.changeHauteurValue = val;
    }
    changeLargeurBordure(val) {
        this.largeurBordure = val+"px ";
       // this.logo.style.border = val+"px ";
       this.construireBordure();
       this.changeLargeurBordureValue = val;
    }
    changeCouleurBordure(val) {
        this.couleurBordure= val;
        this.construireBordure();
        this.changeCouleurBordureValue = val;
    }
    changerTextLogo(val) {
        if (val=="")
        {
            console.log("vide")
            val ="​"
        }
        this.textLogo.innerText= val;
        this.textLogoValue = val;

    }
    
    construireBordure()
    {
        this.logo.style.border =this.largeurBordure+this.couleurBordure+ " solid";
    }
    selecteurRadiusBordure(val)
    { 
        this.logo.style.borderRadius  =val+"px";
        console.log("radius")
        this.takeshot()
        this.radiusValus = val;
    }
    setUrlImage(val){
        this.logo.style.background = "url("+val+")";
        this.urlImageValue = encodeURI(val);
       
       
    }
    
}

customElements.define("my-logo", MyLogo);