import './Shopify.css';

function Shopify() {
    return (
      <div>
        
        <div>
          <h3>Freelance Shopify Work</h3>
          <p>I reworked the blog landing page and created from scratch the video gallery page for upcycling clothing e-store, Twill the Messenger. This work was done with a Shopify developer account that was given access to his store. The work was done in liquid.
          </p>
        </div>
        <div>
          <a href="https://www.twillthemessenger.com/blogs/woven-scripts">
            <p className="button-border">
              Click here for blog landing page
            </p>
          </a>
          <h4>
            <a href="https://www.twillthemessenger.com/blogs/woven-scripts">
              <img src="/blog.png" alt="Twill blog screenshot" />
            </a>
          </h4>
        </div>
        <div>
          <a href="https://www.twillthemessenger.com/pages/highlights">
            <p className="button-border">
              Click here for video gallery
            </p>
          </a>
          <h4>
            <a href="https://www.twillthemessenger.com/pages/highlights">
              <img src="/videoGallery.png" alt="Twill video gallery screenshot" />
            </a>
          </h4>
        </div>
      </div>
    )
  }
  
  export default Shopify;
  