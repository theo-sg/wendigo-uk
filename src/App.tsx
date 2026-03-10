import heroImage from './assets/_DSF9736.jpg'
import logo from './assets/logo.svg'
import './App.css'

function App() {
  return (
    <div className="page-wrapper">
      <section className="section">
        <div className="hero_main">
          {/* <div className="navbar w-nav" data-animation="default" data-collapse="all" data-duration="400" data-easing="ease" data-easing2="ease" role="banner">
            <div className="page-padding">
              <div className="menu-bg-overlay"></div>
              <div className="container fluid w-container">
                <div className="nav-wrapper">
                  <nav className="hero-nav-menu w-nav-menu" role="navigation">
                    <div className="nav-link-wrap">
                      <a aria-current="page" className="nav-link big-text line-height cc-1 w-inline-block w--current" data-w-id="ca68cf16-96c5-3729-e7c7-37c75142fd5e" href="/">
                        <div className="nav-menu-text">Home</div>
                        <div className="nav-number soft-text">01</div>
                        <div className="nav-underline"></div>
                      </a>
                      <a className="nav-link big-text line-height cc-2 w-inline-block" data-w-id="ca68cf16-96c5-3729-e7c7-37c75142fd64" href="#about">
                        <div className="nav-menu-text">About</div>
                        <div className="nav-number soft-text">02</div>
                        <div className="nav-underline"></div>
                      </a>
                      <a className="nav-link big-text line-height cc-3 w-inline-block" data-w-id="ca68cf16-96c5-3729-e7c7-37c75142fd6a" href="#music">
                        <div className="nav-menu-text">Music</div>
                        <div className="nav-number soft-text">03</div>
                        <div className="nav-underline"></div>
                        <div className="nav-underline"></div>
                        <div className="nav-underline"></div>
                      </a>
                      <a className="nav-link big-text line-height cc-4 w-inline-block" data-w-id="ca68cf16-96c5-3729-e7c7-37c75142fd72" href="#contact">
                        <div className="nav-menu-text">Contact</div>
                        <div className="nav-number soft-text">04</div>
                        <div className="nav-underline"></div>
                      </a>
                    </div>
                  </nav>
                  <div className="menu-button w-nav-button" data-w-id="ca68cf16-96c5-3729-e7c7-37c75142fd78">
                    <div className="hamburger-menu">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="hero-bg-image-wrap">
            <img alt="wendigo" className="hero-bg-image" loading="eager" sizes="(max-width: 2778px) 100vw, 2778px" src={heroImage} />
          </div>
          <img alt="Logo" className="hero-logo" src={logo} />
        </div>
      </section>

      {/*
      <section id="about" className="section">
        <div className="page-padding">
          <div className="container padding-top">
            <div className="top-bar" data-w-id="a6660f6c-7023-b5c4-a54b-0b758e8dcba7" data-wf--top-bar--variant="base">
              <div className="body-text-5 caps">/ About</div>
              <div className="body-text-5 caps">N. 01</div>
            </div>
            <div className="main-content">
              <div className="about-img-wrap" data-w-id="d1427721-a1e4-e4e6-32f5-a220dc9e892c" style={{ opacity: 0 }}>
                <div className="about-image" style={{ width: '729px', height: '729px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                  Band Photo Placeholder
                </div>
              </div>
              <h1 className="heading" data-w-id="d1427721-a1e4-e4e6-32f5-a220dc9e892f" style={{ opacity: 0 }}>We are Wendigo, an alternative rock band creating <span className="soft-text">raw and powerful music.</span></h1>
              <div>
                <div className="code-embed-5 w-embed" data-w-id="d1427721-a1e4-e4e6-32f5-a220dc9e8934" style={{ opacity: 0 }}>
                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                  </svg>
                </div>
              </div>
              <div className="about-fact" data-w-id="d1427721-a1e4-e4e6-32f5-a220dc9e8935" style={{ opacity: 0 }}>
                <div className="fact-wrap">
                  <div className="display-03" duration="3000">
                    <span className="counter-number" counter-element="number" duration="2000">50</span>+
                  </div>
                  <div>
                    <div className="fact-text">Live Shows<br /><span className="soft-text">Performed worldwide</span></div>
                  </div>
                </div>
                <div>
                  <div className="w-embed">
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                      <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                </div>
                <div className="fact-wrap right">
                  <div className="display-03">
                    <span className="counter-number" counter-element="number" duration="3000">2</span>
                  </div>
                  <div>
                    <div className="fact-text">Studio Albums<br /><span className="soft-text">Released and streaming</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="music" className="section-project">
        <div className="project-bg-wrap">
          <div className="project-bg" style={{ width: '100%', height: '100vh', backgroundColor: '#1a1a1a' }}></div>
        </div>
        <div className="page-padding">
          <div className="container padding-top projects">
            <div className="top-bar" data-w-id="a6660f6c-7023-b5c4-a54b-0b758e8dcba7" data-wf--top-bar--variant="base">
              <div className="body-text-5 caps">/ Music</div>
              <div className="body-text-5 caps">N. 02</div>
            </div>
            <div className="project-content-wrapper" data-w-id="7f5f1331-6fdb-9932-a1f9-be5c6f38edd1" style={{ opacity: 0 }}>
              <div className="project-left" id="w-node-_5d14cdec-ed98-3ba4-8b65-1afa183926f0-025e7aea">
                <div className="display-03 padding-top">(19-25)</div>
              </div>
              <div className="project-wrap">
                <div className="collection-list-wrap cc-1 w-dyn-list">
                  <div className="w-dyn-items" role="list">
                    <div className="w-dyn-item" role="listitem">
                      <div className="project-card cc-1" data-w-id="f1d7483e-da7b-968b-ed90-b34c58fd3356" style={{ opacity: 0 }}>
                        <a className="project-card-link w-inline-block" href="/music/echoes">
                          <div className="project-image" style={{ width: '1200px', height: '800px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>Echoes Album Cover</div>
                        </a>
                        <div className="project-info">
                          <div className="body-text-3">Echoes</div>
                          <div className="body-text-3 soft-text">/2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collection-list-wrap cc-2 w-dyn-list">
                  <div className="w-dyn-items" role="list">
                    <div className="w-dyn-item" role="listitem">
                      <div className="project-card cc-1" data-w-id="33bc0918-7dae-01f7-8bd9-dd774a47cb8e" style={{ opacity: 0 }}>
                        <a className="project-card-link w-inline-block" href="/music/shadows">
                          <div className="project-image" style={{ width: '600px', height: '400px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>Shadows EP Cover</div>
                        </a>
                        <div className="project-info">
                          <div className="body-text-3">Shadows EP</div>
                          <div className="body-text-3 soft-text">/ 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collection-list-wrap cc-3 w-dyn-list">
                  <div className="w-dyn-items" role="list">
                    <div className="w-dyn-item" role="listitem">
                      <div className="project-card cc-1" data-w-id="b965f07b-8ac3-51cb-a304-939ddc582606" style={{ opacity: 0 }}>
                        <a className="project-card-link w-inline-block" href="/music/fire">
                          <div className="project-image" style={{ width: '600px', height: '400px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>Fire Single Cover</div>
                        </a>
                        <div className="project-info">
                          <div className="body-text-3">Fire (Single)</div>
                          <div className="body-text-3 soft-text">/ 2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collection-list-wrap cc-4 w-dyn-list">
                  <div className="w-dyn-items" role="list">
                    <div className="w-dyn-item" role="listitem">
                      <div className="project-card cc-1" data-w-id="17c566a1-20e0-6a0a-885f-d34cc1c0b78b" style={{ opacity: 0 }}>
                        <a className="project-card-link w-inline-block" href="/music/debut">
                          <div className="project-image" style={{ width: '600px', height: '400px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>Debut Album Cover</div>
                        </a>
                        <div className="project-info">
                          <div className="body-text-3">Debut Album</div>
                          <div className="body-text-3 soft-text">/ 2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-button" data-w-id="6703d387-9930-af05-09c6-8dc0cfc12957" style={{ opacity: 0 }}>
                <a className="button-link padding-top w-inline-block" href="/project">
                  <div className="body-text-4">Explore All</div>
                  <div className="circle-link">
                    <div className="long-arrow-icon w-embed">
                      <svg fill="none" height="12" viewBox="0 0 29 12" width="29" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6L27 6L21.5 1" stroke="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="page-padding">
          <div className="container padding-top">
            <div className="top-bar" data-w-id="a6660f6c-7023-b5c4-a54b-0b758e8dcba7" data-wf--top-bar--variant="base">
              <div className="body-text-5 caps">/ Expertise</div>
              <div className="body-text-5 caps">N. 03</div>
            </div>
            <div className="main-content">
              <div className="left-content" id="w-node-bca9d76a-b68f-9af1-3f41-9601dc65e999-025e7aea">
                <div className="hide">
                  <div className="w-embed">
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                      <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h1 data-w-id="bca9d76a-b68f-9af1-3f41-9601dc65e99c" style={{ opacity: 0 }}>Our sound combines raw energy with melodic depth to create <span className="soft-text">music that resonates<br />and endures</span></h1>
              <div className="blank-space"></div>
              <div className="service-wrapper" data-w-id="bca9d76a-b68f-9af1-3f41-9601dc65e9a3" style={{ opacity: 0 }}>
                <div className="service-card">
                  <div className="service-icon">
                    <div className="service-icon w-embed">
                      <svg fill="none" height="60" viewBox="0 0 58 58" width="60" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5918 25.8584C8.70012 29.2417 13.5339 33.5915 18.3672 38.4248C23.2005 43.2581 27.5503 48.0919 30.9336 52.2002C16.6753 53.6502 4.5918 42.5333 4.5918 28.5166V25.8584ZM10.1504 12.8086C15.467 16.9169 21.5087 22.4755 27.792 28.7588C34.0752 35.0421 39.6339 41.0838 43.7422 46.4004C41.3256 48.5753 38.6669 50.2667 35.5254 51.2334C34.8003 46.8834 30.208 40.1172 23.4414 33.3506C16.9165 26.584 9.9086 21.9921 5.55859 21.0254C6.52526 18.1254 7.97539 15.2253 10.1504 12.8086ZM21.0254 5.7998C25.6171 9.18314 31.4173 14.2586 36.9756 20.0586C42.7753 25.6167 47.8501 31.4163 51.2334 36.0078C50.2668 38.1827 49.0588 40.3578 47.8506 42.291C45.9171 37.216 40.6005 29.9662 33.834 22.958C27.0673 16.1913 19.8172 10.8747 14.7422 8.94141C16.6755 7.49145 18.8504 6.5248 21.0254 5.7998ZM28.5176 4.5918C41.5676 4.5918 51.9595 15.2254 52.2012 28.2754C50.0262 24.4088 46.4012 19.575 41.8096 14.9834C37.2179 10.3917 32.3842 6.7668 28.5176 4.5918Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="service-info">
                    <div className="service-left">
                      <div className="body-text-2">Design</div>
                      <div className="soft-text font-weight-light">/01</div>
                    </div>
                    <div>
                      <div className="w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                          <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <div className="service-icon w-embed">
                      <svg fill="none" height="58" viewBox="0 0 58 58" width="58" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.3809 7.32422C27.1698 4.22537 31.6387 4.22537 33.4316 7.32422L37.4756 14.332C37.3846 14.3845 37.3084 14.4597 37.2559 14.5508L17.832 48.2002C17.7792 48.2915 17.7518 48.3955 17.752 48.501H9.65625C6.0786 48.5008 3.83839 44.626 5.63086 41.5283L25.3809 7.32422ZM53.1807 41.5283C54.9694 44.626 52.7339 48.4977 49.1562 48.498H35.7812L46.4951 29.9473L53.1807 41.5283Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="service-info">
                    <div className="service-left">
                      <div className="body-text-2">Development<br /></div>
                      <div className="soft-text font-weight-light">/02<br /></div>
                    </div>
                    <div>
                      <div className="w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                          <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <div className="service-icon w-embed">
                      <svg fill="none" height="47" viewBox="0 0 47 47" width="47" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.1143 0C23.9684 0.000211616 25.4824 1.5058 25.4824 3.36914V43.6406C25.4822 45.4946 23.9774 47.0086 22.1143 47.0088H3.36914C1.50566 46.9996 0 45.4943 0 43.6309V3.36914C0 1.50566 1.50566 0 3.36914 0H22.1143ZM29.8984 5.97656C30.1371 5.43496 30.7709 5.18711 31.3125 5.42578L34.7451 6.94043C35.7824 7.39023 36.4434 8.40898 36.4434 9.53809V37.4629C36.4432 38.5826 35.7731 39.6016 34.7451 40.0605L31.3125 41.5752C31.184 41.6394 31.0277 41.667 30.8809 41.667C30.2842 41.667 29.8067 41.1894 29.8066 40.5928V6.40723C29.8067 6.26059 29.8343 6.11405 29.8984 5.97656ZM40.876 11.1992C41.133 10.6668 41.767 10.4285 42.3086 10.6855L45.3652 12.127C46.3657 12.5951 46.999 13.5958 46.999 14.6973V32.3037C46.9989 33.4052 46.3566 34.4059 45.3652 34.874L42.3086 36.3154C42.1618 36.3797 42.0056 36.416 41.8496 36.416C41.2621 36.416 40.7754 35.9385 40.7754 35.3418V11.6582C40.7754 11.5022 40.8117 11.346 40.876 11.1992Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="service-info">
                    <div className="service-left">
                      <div className="body-text-2">Branding<br /></div>
                      <div className="soft-text font-weight-light">/03</div>
                    </div>
                    <div>
                      <div className="w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                          <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <div className="service-icon w-embed">
                      <svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.0625 15.9346L31.8721 31.8701L47.999 15.7471L47.8086 31.6846L47.6182 47.6191L31.6836 47.8096L15.7461 48L31.8701 31.8721L15.9346 32.0625L0 32.2529L16.125 16.125L32.2529 0L32.0625 15.9346Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="service-info">
                    <div className="service-left">
                      <div className="body-text-2">Art Direction<br /></div>
                      <div className="soft-text font-weight-light">/04</div>
                    </div>
                    <div>
                      <div className="w-embed">
                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                          <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-award">
        <div className="award-container" data-w-id="1d731b01-e10b-69ed-d682-29205ed3a482" style={{ opacity: 0 }}>
          <div className="award-wrapper cc-1">
            <div className="award-image">
              <div className="dark-bg"></div>
              <div className="award-image" style={{ width: '1920px', height: '1080px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>Award Image Placeholder</div>
            </div>
            <div className="page-padding _100vh">
              <div className="container award">
                <div className="top-bar w-variant-77caaeeb-9e74-5c26-31db-190cb153edbe" data-w-id="a6660f6c-7023-b5c4-a54b-0b758e8dcba7" data-wf--top-bar--variant="secondary">
                  <div className="body-text-5 caps">/ Awards</div>
                  <div className="body-text-5 caps">N. 04</div>
                </div>
                <div className="award-bottom-wrap">
                  <div id="w-node-_1c9c85a5-fe3f-c52e-7079-9270c6ebeda6-025e7aea">/ 01 </div>
                  <div className="award-title-wrap">
                    <div className="display-02">Fiona</div>
                    <div>2024</div>
                  </div>
                  <div id="w-node-b5ac2123-d4ec-1694-d0d5-b8f9917351bf-025e7aea">Best Minimal Design</div>
                </div>
              </div>
            </div>
          </div>
          <div className="award-wrapper cc-2">
            <div className="award-image">
              <div className="dark-bg"></div>
              <img alt="Wendigo band award for Best New Artist 2024" className="award-image" loading="lazy" sizes="(max-width: 1920px) 100vw, 1920px" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b17_Placeholder%20Image.webp" srcSet="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b17_59cb32d7b6fef7a7b3a2215c76f78a8c_Placeholder%2520Image-p-500.webp 500w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b17_59cb32d7b6fef7a7b3a2215c76f78a8c_Placeholder%2520Image-p-800.webp 800w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b17_59cb32d7b6fef7a7b3a2215c76f78a8c_Placeholder%2520Image-p-1080.webp 1080w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b17_59cb32d7b6fef7a7b3a2215c76f78a8c_Placeholder%2520Image-p-1600.webp 1600w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b17_Placeholder%20Image.webp 1920w" />
            </div>
            <div className="page-padding">
              <div className="container award">
                <div className="top-bar w-variant-77caaeeb-9e74-5c26-31db-190cb153edbe" data-w-id="a6660f6c-7023-b5c4-a54b-0b758e8dcba7" data-wf--top-bar--variant="secondary">
                  <div className="body-text-5 caps">/ Awards</div>
                  <div className="body-text-5 caps">N. 04</div>
                </div>
                <div className="award-bottom-wrap">
                  <div id="w-node-ccde3c1c-bf73-fdf4-b513-867ac6076c58-025e7aea">/ 02</div>
                  <div className="award-title-wrap">
                    <div className="display-02">Lunox</div>
                    <div>2025</div>
                  </div>
                  <div id="w-node-ccde3c1c-bf73-fdf4-b513-867ac6076c5f-025e7aea">Portfolio Website</div>
                </div>
              </div>
            </div>
          </div>
          <div className="award-wrapper cc-3">
            <div className="award-image">
              <div className="dark-bg"></div>
              <img alt="Wendigo band receiving Breakthrough Award 2023" className="award-image" loading="lazy" sizes="(max-width: 1920px) 100vw, 1920px" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b11_Award_Image_2.webp" srcSet="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b11_fad2410f1ac383a85571b5f35d6528d6_Award_Image_2-p-500.webp 500w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b11_fad2410f1ac383a85571b5f35d6528d6_Award_Image_2-p-800.webp 800w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b11_fad2410f1ac383a85571b5f35d6528d6_Award_Image_2-p-1080.webp 1080w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b11_fad2410f1ac383a85571b5f35d6528d6_Award_Image_2-p-1600.webp 1600w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b11_Award_Image_2.webp 1920w" />
            </div>
            <div className="page-padding">
              <div className="container award">
                <div className="top-bar w-variant-77caaeeb-9e74-5c26-31db-190cb153edbe" data-w-id="a6660f6c-7023-b5c4-a54b-0b758e8dcba7" data-wf--top-bar--variant="secondary">
                  <div className="body-text-5 caps">/ Awards</div>
                  <div className="body-text-5 caps">N. 04</div>
                </div>
                <div className="award-bottom-wrap">
                  <div id="w-node-_62e1d340-5936-ef15-207d-d9e54056123e-025e7aea">/ 03</div>
                  <div className="award-title-wrap">
                    <div className="display-02">Techi </div>
                    <div>2024</div>
                  </div>
                  <div id="w-node-_62e1d340-5936-ef15-207d-d9e540561245-025e7aea">Best Futuristic Design</div>
                </div>
              </div>
            </div>
          </div>
          <div className="award-wrapper cc-4">
            <div className="award-image">
              <div className="dark-bg"></div>
              <img alt="Wendigo band winning Best Alternative Rock Award 2024" className="award-image" loading="lazy" sizes="(max-width: 1920px) 100vw, 1920px" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b16_Award_Image_4.webp" srcSet="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b16_822f5bcd28a973c3194629810f16ed7e_Award_Image_4-p-500.webp 500w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b16_822f5bcd28a973c3194629810f16ed7e_Award_Image_4-p-800.webp 800w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b16_822f5bcd28a973c3194629810f16ed7e_Award_Image_4-p-1080.webp 1080w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b16_822f5bcd28a973c3194629810f16ed7e_Award_Image_4-p-1600.webp 1600w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b16_Award_Image_4.webp 1920w" />
            </div>
            <div className="page-padding">
              <div className="container award">
                <div className="top-bar w-variant-77caaeeb-9e74-5c26-31db-190cb153edbe" data-w-id="a6660f6c-7023-b5c4-a54b-0b758e8dcba7" data-wf--top-bar--variant="secondary">
                  <div className="body-text-5 caps">/ Awards</div>
                  <div className="body-text-5 caps">N. 04</div>
                </div>
                <div className="award-bottom-wrap">
                  <div id="w-node-d2049f65-828e-e6c8-f2c2-c3a416139d68-025e7aea">/ 04</div>
                  <div className="award-title-wrap">
                    <div className="display-02">Milan </div>
                    <div>2024</div>
                  </div>
                  <div id="w-node-d2049f65-828e-e6c8-f2c2-c3a416139d6f-025e7aea">Best Mobile App Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="page-padding">
          <div className="container padding-top">
            <div className="top-bar" data-w-id="a6660f6c-7023-b5c4-a54b-0b758e8dcba7" data-wf--top-bar--variant="base">
              <div className="body-text-5 caps">/ Testimonials</div>
              <div className="body-text-5 caps">N. 05</div>
            </div>
            <div className="main-content">
              <div className="left-content" id="w-node-_6a926bec-b6ac-9de0-dcbb-023b0f733395-025e7aea">
                <div>
                  <div className="code-embed-2 w-embed">
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                      <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h1 data-w-id="6b84dac8-7841-fd37-a065-110f38d355bd" style={{ opacity: 0 }}>Our results speak volumes—discover what clients say <span className="soft-text">about partnering with us.</span></h1>
              <div className="blank-space"></div>
              <div className="feedback-wrapper">
                <div className="feeback-slider-wrap w-slider" data-animation="slide" data-autoplay="true" data-autoplay-limit="0" data-delay="4000" data-disable-swipe="false" data-duration="500" data-easing="ease-in-out" data-hide-arrows="false" data-infinite="true" data-nav-spacing="3" data-w-id="81bbf33e-3118-cd53-eadb-a856fcc19780" style={{ opacity: 0 }}>
                  <div className="feddback-mask w-slider-mask">
                    <div className="feedback-slider w-slide">
                      <div className="feedback-main">
                        <div className="client-image-wrap">
                          <img alt="Portrait of a young person with medium-length dark hair wearing a brown blazer and a dark brown top with a matching scarf tied at the neck." className="client-image" loading="lazy" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b02_Client_Image_1.jpg" />
                          <div className="hero-image-shape-2 small-size w-embed">
                            <svg fill="none" height="100%" viewBox="0 0 70 69" width="100%" xmlns="http://www.w3.org/2000/svg">
                              <path d="M70 50H20V69H0V49H20V0H70V50Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="quote-info">
                          <div className="quote-top">
                            <div className="body-text-4 soft-text">/01</div>
                            <div>
                              <div className="w-embed">
                                <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="quote-main">
                            <h2>Working with Enzo was seamless —high-quality work, fast turnaround, and impressive attention to detail.</h2>
                          </div>
                        </div>
                        <div className="align-right" id="w-node-_0f31d8f8-8785-b86e-69e5-72f81818d847-1818d83b">
                          <div className="w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                              <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="client-info">
                          <div className="body-text-4">Gorgia Ferico<br /></div>
                          <div className="body-text-4 soft-text">Co-Founder at Luca</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-slide">
                      <div className="feedback-main">
                        <div className="client-image-wrap">
                          <img alt="Smiling middle-aged man with short light brown hair, a beard, and blue eyes wearing a light blue shirt." className="client-image" loading="lazy" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b3b_Client_Image_3.jpg" />
                          <div className="hero-image-shape-2 small-size w-embed">
                            <svg fill="none" height="100%" viewBox="0 0 70 69" width="100%" xmlns="http://www.w3.org/2000/svg">
                              <path d="M70 50H20V69H0V49H20V0H70V50Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="quote-info">
                          <div className="quote-top">
                            <div className="body-text-4 soft-text">/02</div>
                            <div>
                              <div className="w-embed">
                                <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="quote-main">
                            <h2>Exceptional creativity and strategy that significantly elevated our brand’s overall digital presence and impact.</h2>
                          </div>
                        </div>
                        <div className="align-right" id="w-node-_0f31d8f8-8785-b86e-69e5-72f81818d847-1818d83b">
                          <div className="w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                              <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="client-info">
                          <div className="body-text-4">Maria Gomez<br /></div>
                          <div className="body-text-4 soft-text">Designer at Flowless</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-slide">
                      <div className="feedback-main">
                        <div className="client-image-wrap">
                          <img alt="She’s back again with another amazing photo. It was a little bit tricky with this shoot trying to really fix the lights as well as making sure her makeup was on point. I have to say though, this came out pretty good." className="client-image" loading="lazy" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b3a_Client%20Image.jpg" />
                          <div className="hero-image-shape-2 small-size w-embed">
                            <svg fill="none" height="100%" viewBox="0 0 70 69" width="100%" xmlns="http://www.w3.org/2000/svg">
                              <path d="M70 50H20V69H0V49H20V0H70V50Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="quote-info">
                          <div className="quote-top">
                            <div className="body-text-4 soft-text">/03</div>
                            <div>
                              <div className="w-embed">
                                <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="quote-main">
                            <h2>Outstanding creativity and strategic thinking that truly elevated our brand’s digital presence.</h2>
                          </div>
                        </div>
                        <div className="align-right" id="w-node-_0f31d8f8-8785-b86e-69e5-72f81818d847-1818d83b">
                          <div className="w-embed">
                            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                              <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="client-info">
                          <div className="body-text-4">Daiel Hoga<br /></div>
                          <div className="body-text-4 soft-text">Art Ditector at Bodna</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="left-arrow w-slider-arrow-left">
                    <div className="circle-link-white">
                      <div className="long-arrow-black w-embed">
                        <svg fill="none" height="12" viewBox="0 0 30 12" width="30" xmlns="http://www.w3.org/2000/svg">
                          <path d="M30 6L3 6L8.5 1.5" stroke="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="right-arrow w-slider-arrow-right">
                    <div className="circle-link-white">
                      <div className="long-arrow-black w-embed">
                        <svg fill="none" height="12" viewBox="0 0 29 12" width="29" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 6L27 6L21.5 1" stroke="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="slider-button w-slider-nav w-round w-num"></div>
                </div>
                <div className="bottom-wrap" data-w-id="81bbf33e-3118-cd53-eadb-a856fcc197ca" style={{ opacity: 0 }}>
                  <div className="blank-space hide-on-off"></div>
                  <div className="client-rating">
                    <div className="display-03">96%</div>
                    <div className="body-text-4">13k+ Satisfied Clients<br /><span className="soft-text">Avg 4.9 rating</span></div>
                  </div>
                </div>
              </div>
              <div className="client-logo-wrap" data-w-id="09430fdd-add1-97e6-caaf-c4d4c5513d2b" style={{ opacity: 0 }}>
                <div className="client-logo">
                  <img alt="LOGIC SPORT brand logo in stylized white text" loading="lazy" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b03_client_logo_1.png" />
                </div>
                <div className="client-logo">
                  <img alt="Logo text reading 'LOCO' in stylized capital letters." loading="lazy" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b05_client_logo_2.png" />
                </div>
                <div className="client-logo">
                  <img alt="Abstract white maze-like circular logo on black background." loading="lazy" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b06_client_logo_3.png" />
                </div>
                <div className="client-logo">
                  <img alt="Ipsum brand logo in white text." loading="lazy" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b07_client_logo_4.png" />
                </div>
                <div className="client-logo">
                  <img alt="White stylized letter N on a black background." loading="lazy" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b04_client_logo_5.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="page-padding">
          <div className="container padding-top">
            <div className="top-bar" data-w-id="a6660f6c-7023-b5c4-a54b-0b758e8dcba7" data-wf--top-bar--variant="base">
              <div className="body-text-5 caps">/ Price</div>
              <div className="body-text-5 caps">N. 06</div>
            </div>
            <div className="main-content">
              <div className="left-content" id="w-node-_22593073-2e25-3918-d212-90d5b42a66e4-025e7aea">
                <div>
                  <div className="code-embed-4 w-embed">
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                      <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h1 data-w-id="22593073-2e25-3918-d212-90d5b42a66e7" style={{ opacity: 0 }}>Simple, transparent pricing <span className="soft-text">for every project</span></h1>
              <div className="blank-space"></div>
              <div className="div-block-12" data-w-id="6fb5632a-7ea2-89a5-9f15-b64a279baa6d" style={{ opacity: 0 }}>
                <div className="discount-offer">
                  <div className="body-text-4">Save ~ 20% <span className="soft-text">when billed yearly</span></div>
                </div>
                <div className="pricing-tab-wrapper w-tabs" data-current="Tab 1" data-duration-in="300" data-duration-out="100" data-easing="ease-in-out-expo">
                  <div className="pricing-tab-menu w-tab-menu">
                    <a className="pricing-tab w-inline-block w-tab-link w--current" data-w-tab="Tab 1">
                      <div className="pricing-tab-text text-s">Monthly</div>
                    </a>
                    <a className="pricing-tab w-inline-block w-tab-link" data-w-tab="Tab 2">
                      <div className="pricing-tab-text text-s">Yearly</div>
                    </a>
                  </div>
                  <div className="pricing-tab-content w-tab-content">
                    <div className="w-tab-pane w--tab-active" data-w-tab="Tab 1">
                      <div className="price-card">
                        <div className="price">
                          <div className="price-info">
                            <div className="body-text-4">Regular</div>
                            <div className="div-block-4">
                              <div className="display-03">$500</div>
                              <div className="body-text-4 soft-text">/month</div>
                            </div>
                          </div>
                          <div className="div-block-16">
                            <div className="plus-icon w-embed">
                              <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="package-feature">
                          <div className="body-text-4 soft-text">What’s Included:</div>
                          <ul className="package-list-group w-list-unstyled" role="list">
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">02 Design Request</div>
                            </li>
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">Unlimited Revisions</div>
                            </li>
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">Support</div>
                            </li>
                          </ul>
                          <a className="button-primary w-inline-block" data-w-id="90c79ea6-e625-520e-f1da-b90043631bdd" href="/contact">
                            <div>Subscribe Now</div>
                            <div className="button-bg"></div>
                          </a>
                        </div>
                      </div>
                      <div className="price-card">
                        <div className="price">
                          <div className="price-info">
                            <div className="body-text-4">Regular</div>
                            <div className="div-block-4">
                              <div className="display-03">$700</div>
                              <div className="body-text-4 soft-text">/month</div>
                            </div>
                          </div>
                          <div className="div-block-16">
                            <div className="plus-icon w-embed">
                              <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="package-feature">
                          <div className="body-text-4 soft-text">What’s Included:</div>
                          <ul className="package-list-group w-list-unstyled" role="list">
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">02 Design Request</div>
                            </li>
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">Unlimited Revisions</div>
                            </li>
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">Support</div>
                            </li>
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">Invoice</div>
                            </li>
                          </ul>
                          <a className="button-primary w-inline-block" data-w-id="90c79ea6-e625-520e-f1da-b90043631bdd" href="/contact">
                            <div>Subscribe Now</div>
                            <div className="button-bg"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="w-tab-pane" data-w-tab="Tab 2">
                      <div className="price-card">
                        <div className="price">
                          <div className="price-info">
                            <div className="body-text-4">Regular</div>
                            <div className="div-block-4">
                              <div className="display-03">$5500</div>
                              <div className="body-text-4 soft-text">/year</div>
                            </div>
                          </div>
                          <div className="div-block-16">
                            <div className="plus-icon w-embed">
                              <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="package-feature">
                          <div className="body-text-4 soft-text">What’s Included:</div>
                          <ul className="package-list-group w-list-unstyled" role="list">
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">02 Design Request</div>
                            </li>
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">Unlimited Revisions</div>
                            </li>
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">Support</div>
                            </li>
                          </ul>
                          <a className="button-primary w-inline-block" data-w-id="90c79ea6-e625-520e-f1da-b90043631bdd" href="#">
                            <div>Subscribe Now</div>
                            <div className="button-bg"></div>
                          </a>
                        </div>
                      </div>
                      <div className="price-card">
                        <div className="price">
                          <div className="price-info">
                            <div className="body-text-4">Regular</div>
                            <div className="div-block-4">
                              <div className="display-03">$8200</div>
                              <div className="body-text-4 soft-text">/year</div>
                            </div>
                          </div>
                          <div className="div-block-16">
                            <div className="plus-icon w-embed">
                              <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="package-feature">
                          <div className="body-text-4 soft-text">What’s Included:</div>
                          <ul className="package-list-group w-list-unstyled" role="list">
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">02 Design Request</div>
                            </li>
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">Unlimited Revisions</div>
                            </li>
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">Support</div>
                            </li>
                            <li className="package-list">
                              <div>
                                <div className="plus-icon w-embed">
                                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.75 7.74854L0.75 7.74853" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                    <path d="M7.74805 0.75L7.74805 14.75" stroke="#333333" strokeLinecap="round" strokeWidth="1.5"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="body-text-4">Invoice</div>
                            </li>
                          </ul>
                          <a className="button-primary w-inline-block" data-w-id="90c79ea6-e625-520e-f1da-b90043631bdd" href="#">
                            <div>Subscribe Now</div>
                            <div className="button-bg"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="page-padding"></div>
      </section>
      <section className="section padding-top">
        <div className="image-placeholder" data-w-id="3030c618-d30d-42be-5415-135c13b35619" style={{ opacity: 0 }}>
          <img alt="Stylized portrait of a person wearing a beanie and coat, with a motion blur effect and a vibrant orange and blue background." className="image-only" loading="lazy" sizes="(max-width: 2160px) 100vw, 2160px" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b08_Artistic%20Portrait.webp" srcSet="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b08_a4edceabf226c9a7178ba03a59b00504_Artistic%2520Portrait-p-500.webp 500w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b08_a4edceabf226c9a7178ba03a59b00504_Artistic%2520Portrait-p-800.webp 800w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b08_a4edceabf226c9a7178ba03a59b00504_Artistic%2520Portrait-p-1080.webp 1080w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b08_a4edceabf226c9a7178ba03a59b00504_Artistic%2520Portrait-p-1600.webp 1600w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b08_a4edceabf226c9a7178ba03a59b00504_Artistic%2520Portrait-p-2000.webp 2000w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b08_Artistic%20Portrait.webp 2160w" />
          <div className="video-link-wrap">
            <a className="video-link w-inline-block" href="https://youtu.be/Fa4kD-FzWSU?si=lhzX4a7g6tcCSJ_s">
              <div className="video-play-btn" data-w-id="bb379c88-a6e0-31b4-ba7d-a56735bdd091">
                <div className="video-play-icon w-embed" data-w-id="27eec707-88b1-8cfb-4224-a183ff831d21">
                  <svg fill="currentColor" height="29" viewBox="0 0 22 29" width="22" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L22 13.9175L0 29V0Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              <div className="video-text">
                <div className="video-text-small">Watch</div>
                <div>My Journey</div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="page-padding">
          <div className="container padding-top">
            <div className="top-bar" data-w-id="a6660f6c-7023-b5c4-a54b-0b758e8dcba7" data-wf--top-bar--variant="base">
              <div className="body-text-5 caps">/FAQ</div>
              <div className="body-text-5 caps">N. 07</div>
            </div>
            <div className="faq-holder w-tabs" data-current="" data-duration-in="300" data-duration-out="100" data-easing="ease">
              <div className="faq-wrap w-tab-menu">
                <a className="faq-item w-inline-block w-tab-link" data-w-id="b4562ddc-737d-025a-17d8-677c93f9ec91" data-w-tab="Tab 1">
                  <div className="faq-question">
                    <div className="body-text-3">How do you weigh different criteria in your process?</div>
                    <div className="expand-icon">
                      <div className="faq-icon-2 w-embed">
                        <svg className="bi bi-plus" fill="currentColor" height="24" viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="faq-answer">
                    <div className="body-text-5">We evaluate criteria based on relevance, impact, and alignment with objectives. Each factor is prioritized by importance, ensuring a balanced, transparent, and effective decision-making process.</div>
                  </div>
                </a>
                <a className="faq-item w-inline-block w-tab-link" data-w-id="b4562ddc-737d-025a-17d8-677c93f9ec9a" data-w-tab="Tab 2">
                  <div className="faq-question">
                    <div className="body-text-3">How can I open and account?</div>
                    <div className="expand-icon">
                      <div className="faq-icon-2 w-embed">
                        <svg className="bi bi-plus" fill="currentColor" height="24" viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="faq-answer">
                    <div className="body-text-5">Sign up, verify your identity, add payout details, and activate your selling account.</div>
                  </div>
                </a>
                <a className="faq-item w-inline-block w-tab-link" data-w-id="b4562ddc-737d-025a-17d8-677c93f9eca3" data-w-tab="Tab 3">
                  <div className="faq-question">
                    <div className="body-text-3">How do I get started?</div>
                    <div className="expand-icon">
                      <div className="faq-icon-2 w-embed">
                        <svg className="bi bi-plus" fill="currentColor" height="24" viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="faq-answer">
                    <div className="body-text-5">To get started, simply sign up, follow the onboarding steps, and explore key features. Our support resources and guides will help you quickly understand everything you need.</div>
                  </div>
                </a>
                <a className="faq-item w-inline-block w-tab-link" data-w-id="b4562ddc-737d-025a-17d8-677c93f9ecac" data-w-tab="Tab 4">
                  <div className="faq-question">
                    <div className="body-text-3">Can I customize the packages you offer?</div>
                    <div className="expand-icon">
                      <div className="faq-icon-2 w-embed">
                        <svg className="bi bi-plus" fill="currentColor" height="24" viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="faq-answer">
                    <div className="body-text-5">Yes, you can customize our packages by selecting features that fit your needs. We offer flexible options and support to help you create the perfect solution for.n<br /></div>
                  </div>
                </a>
                <a className="faq-item w-inline-block w-tab-link" data-w-id="b4562ddc-737d-025a-17d8-677c93f9ecb5" data-w-tab="Tab 5">
                  <div className="faq-question">
                    <div className="body-text-3">What is your refund policy?</div>
                    <div className="expand-icon">
                      <div className="faq-icon-2 w-embed">
                        <svg className="bi bi-plus" fill="currentColor" height="24" viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="faq-answer">
                    <div className="body-text-5">We offer refunds within 14 days of purchase, provided the service hasn’t started and no deliverables have been used.Answer</div>
                  </div>
                </a>
              </div>
              <div className="tabs-content w-tab-content">
                <div className="w-tab-pane" data-w-tab="Tab 1"></div>
                <div className="w-tab-pane" data-w-tab="Tab 2"></div>
                <div className="w-tab-pane" data-w-tab="Tab 3"></div>
                <div className="w-tab-pane" data-w-tab="Tab 4"></div>
                <div className="w-tab-pane" data-w-tab="Tab 5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-cta">
        <div className="cta-bg-image">
          <img alt="Close-up of textured black sand with subtle wave-like patterns and small sparkling grains." className="cta-image" loading="lazy" sizes="(max-width: 2500px) 100vw, 2500px" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b15_CTA_bg_Image.webp" srcSet="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b15_fc68f1b3c4e46270486697f07ba96471_CTA_bg_Image-p-500.webp 500w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b15_fc68f1b3c4e46270486697f07ba96471_CTA_bg_Image-p-800.webp 800w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b15_fc68f1b3c4e46270486697f07ba96471_CTA_bg_Image-p-1080.webp 1080w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b15_fc68f1b3c4e46270486697f07ba96471_CTA_bg_Image-p-1600.webp 1600w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b15_fc68f1b3c4e46270486697f07ba96471_CTA_bg_Image-p-2000.webp 2000w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b15_CTA_bg_Image.webp 2500w" />
          <div className="dark-gradient"></div>
        </div>
        <div className="page-padding">
          <div className="container padding-top">
            <div className="cta-wrap">
              <div className="cta-title">
                <div className="display-02" data-w-id="b62c7602-cee9-edbd-b3cf-73e71a721fdf">Anything in Mind?<br /><span className="soft-text">Let’s Talk</span></div>
                <a className="button-secondary w-inline-block" data-w-id="f6ec44d3-8216-96f9-9497-1599d6d0435d" href="/contact">
                  <div>Let's Discuss</div>
                  <div className="button-bg-seondary"></div>
                </a>
              </div>
              <div className="cta-image-wrap">
                <img alt="Profile of a man wearing a red puffer jacket with a large, fluffy red fur collar against a plain background." className="cta-image-main" loading="lazy" sizes="(max-width: 729px) 100vw, 729px" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b18_Personal%20Portrait.webp" srcSet="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b18_444711bd9af2b787d3f305f2e0e85b8c_Personal%2520Portrait-p-500.webp 500w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b18_Personal%20Portrait.webp 729w" />
                <img alt="Profile of a person with dark skin wearing a black turtleneck and large red futuristic glasses against a light teal background." className="cta-image-right" loading="lazy" sizes="(max-width: 767px) 100vw, 608px" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b0a_CTA_Image_2.webp" srcSet="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b0a_CTA_Image_2-p-500.webp 500w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b0a_CTA_Image_2.webp 608w" />
                <img alt="Portrait of a young man wearing an orange hat, viewed through a circular frame, with a thoughtful expression." className="cta-image-left" loading="lazy" sizes="(max-width: 767px) 100vw, 608px" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b0c_CTA_Image_3.webp" srcSet="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b0c_CTA_Image_3-p-500.webp 500w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b0c_CTA_Image_3.webp 608w" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="section">
        <div className="page-padding">
          <div className="container padding-top">
            <div className="main-content" style={{ display: 'flex', justifyContent: 'center' }}>
              <h4 data-w-id="d1427721-a1e4-e4e6-32f5-a220dc9e892f">is nothing sacred anymore?</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="section-footer">
        <div className="page-padding">
          <div className="w-layout-blockcontainer container padding-top w-container">
            <img alt="Gradient background transitioning from dark black to bright orange." className="footer-bg-image" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" src="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b0e_Footer_Gradient_Bg.webp" srcSet="https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b0e_Footer_Gradient_Bg-p-500.webp 500w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b0e_Footer_Gradient_Bg-p-800.webp 800w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b0e_Footer_Gradient_Bg-p-1080.webp 1080w, https://cdn.prod.website-files.com/69af50cc240e92e5025e7aa3/69af50cf240e92e5025e7b0e_Footer_Gradient_Bg.webp 1440w" />
            <div className="footer-top-wrap" data-w-id="b06371d0-3293-ab85-eaf4-4113da9d0b5b">
              <div className="phone-wrap">
                <a className="body-text-4" href="mailto:mgmt@wendigo.uk">mgmt@wendigo.uk</a>
                <div className="line"></div>
              </div>
              <div className="social-icon-wrap">
                <a className="social-link" href="https://open.spotify.com/artist/192tykkkWwzLE5PiX3quDp?si=fwSZNNtATr214oRvxBsZWQ" target="_blank">
                  <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.6-.12-.421.18-.78.6-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.241 1.081zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56z"/>
                  </svg>
                </a>
                <a className="social-link" href="https://www.instagram.com/wendigo.uk" target="_blank">
                  <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a className="social-link" href="https://www.youtube.com/@wendigo_uk" target="_blank">
                  <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a className="social-link" href="https://www.tiktok.com/@wendigo.uk" target="_blank">
                  <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a className="social-link" href="https://wendigo-uk.bandcamp.com" target="_blank">
                  <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m0 18.75l7.437-13.5H24l-7.438 13.5z"/>
                  </svg>
                </a>
                <a className="social-link" href="https://www.bandsintown.com/a/15590407" target="_blank">
                  <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.399 12.8v4.8H19.2v1.6H4.799V0H0v24h24V12.8zm4.801-8H6.399v6.4H11.2zm6.4 0h-4.8v6.4h4.8zM24 0h-4.8v11.2H24z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
      <section id="contact" className="section">
        <div className="page-padding">
          <div className="container padding-top">
            <div className="top-bar" data-w-id="a6660f6c-7023-b5c4-a54b-0b758e8dcba7" data-wf--top-bar--variant="base">
              <div className="body-text-5 caps">/ Contact</div>
              <div className="body-text-5 caps">N. 03</div>
            </div>
            <div className="main-content">
              <h1 className="heading" data-w-id="d1427721-a1e4-e4e6-32f5-a220dc9e892f" style={{ opacity: 0 }}>Get in Touch</h1>
              <div className="contact-form-wrap" style={{ marginTop: '2rem' }}>
                <form className="contact-form">
                  <div style={{ marginBottom: '1rem' }}>
                    <label className="contact-field" htmlFor="name">Name*</label>
                    <input className="contact-input w-input" id="name" maxLength={256} name="name" placeholder="Your name" type="text" />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label className="contact-field" htmlFor="email">Email*</label>
                    <input className="contact-input w-input" id="email" maxLength={256} name="email" placeholder="Your email" required type="email" />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label className="contact-field" htmlFor="message">Message*</label>
                    <textarea className="contact-input text-filed w-input" id="message" maxLength={5000} name="message" placeholder="Your message" required></textarea>
                  </div>
                  <button className="contact-button w-button" type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default App
