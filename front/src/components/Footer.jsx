import React from 'react';

function  Footer() {
    return ( 
        <footer class="footer">
    <iframe class="ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.4791216122435!2d-58.44975277030299!3d-34.604904446451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca0f6c0a8db1%3A0x8b6a73a049b61e84!2sRojas%201586%2C%20C1416CPL%20CABA!5e0!3m2!1ses!2sar!4v1651636479091!5m2!1ses!2sar"></iframe>  
     <div class="footerColumn">
     <a class="footerLink" target="blank" href="https://wa.me/541136297896?text=Quiero entrenar con ustedes !"><i class="bi bi-whatsapp icon"></i></a>
     <a class="footerLink" target="blank" href="https://www.instagram.com/manuvalles13/?hl=es"><i class="bi bi-instagram icon"></i></a>
     <a class="footerLink" target="blank" href="https://twitter.com/Manu_Valles300?t=E0vK8Y-4MPnnzpzQgHZQMA&s=09"><i class="bi bi-twitter icon"></i></a>    
     <a class="footerLink" target="blank" href="https://www.linkedin.com/in/manuel-valles-4a17041bb/"><i class="bi bi-linkedin"></i></a>
    </div>   
     <div class="copyrights">
      <form class="formEmail">
      <label class="PHemail" for="email">    
        Deja tu mail para recibir anuncios y promociones al instante !!
        </label>
        <input class="email"name="email"type="email"placeholder="agrega tu mail"requiredName="email"/>
        <input class="submit"name="submit"type="submit"/>
        </form>  
    <span class="span">Todos los derechos reservados © 2021 The Stoic berserker</span>
    </div>   
  </footer>  
     );
}

export default  Footer;