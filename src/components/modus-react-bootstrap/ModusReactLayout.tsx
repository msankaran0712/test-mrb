const layout = (
  <div className="guide-example-block">
    <div
      className="guide-sample position-relative p-0 border"
      id="interactiveExample"
      style={{ height: "600px", zIndex: 10 }}
    >
      <div className="modus-layout">
        <nav
          className="navbar nav navbar-expand-lg modus-header"
          id="modusHeader"
        >
          <a id="menuButton" data-modus-item="menu-btn">
            <i className="modus-icon material-icons menu-btn">menu</i>
          </a>
          <a href="#interactive-example" className="navbar-brand">
            BRAND
          </a>
          <div className="navbar-nav mr-auto">
            <div className="navbar-text">
              <span className="h3">APPLICATION NAME</span>
            </div>
          </div>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav ml-auto">
              <a
                href="#interactive-example"
                className="btn btn-lg btn-icon-only btn-text-primary"
              >
                <i className="modus-icon material-icons">account_circle</i>
              </a>
              <a
                href="#interactive-example"
                className="btn btn-lg btn-icon-only btn-text-primary"
              >
                <i className="modus-icon material-icons">apps</i>
              </a>
            </div>
          </div>
        </nav>
        <div
          className="modus-body sidebar-closed"
          data-modus-item="body"
          id="modusBody"
        >
          <nav className="nav flex-column modus-sidebar" id="modusSidebar">
            <ul>
              <li>
                <a href="#interactive-example" className="nav-link active">
                  <span className="left-nav-icon">
                    <i className="modus-icons">3d_buildings</i>
                  </span>
                  Nav Item 1
                </a>
              </li>
              <li>
                <a href="#interactive-example" className="nav-link">
                  <span className="left-nav-icon">
                    <i className="modus-icons">preview</i>
                  </span>
                  Nav Item 2
                </a>
              </li>
              <li>
                <a href="#interactive-example" className="nav-link">
                  <span className="left-nav-icon">
                    <i className="modus-icon material-icons">settings</i>
                  </span>
                  Nav Item 3
                </a>
              </li>
            </ul>
          </nav>
          <div className="modus-content-rows" id="modusContentRows">
            <div className="modus-toolbar" id="modusToolbar">
              <form className="form-inline ml-3 mr-5">
                <div className="form-group">
                  <label className="mr-2">
                    <strong>Profile</strong>
                  </label>
                  <select className="form-control">
                    <option>Profile 1</option>
                    <option>Profile 2</option>
                    <option>Profile 3</option>
                  </select>
                </div>
              </form>
              <button className="btn btn-text-dark btn-lg btn-icon-only">
                <i className="modus-icon material-icons">palette</i>
              </button>
              <button className="btn btn-text-dark btn-lg btn-icon-only">
                <i className="modus-icons">calendar</i>
              </button>
              <button className="btn btn-text-dark btn-lg btn-icon-only">
                <i className="modus-icon material-icons">settings</i>
              </button>
              <form
                className="form-inline ml-5"
                onSubmit={() => {
                  return !1;
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <button className="btn btn-text-dark btn-lg btn-icon-only ml-2">
                  <i className="modus-icon material-icons">search</i>
                </button>
              </form>
            </div>
            <div className="modus-content-columns" id="modusContentColumns">
              <div className="modus-panel panel-lg shadow-sm" id="modusPanel">
                <div className="panel-header">
                  <div className="left-items ml-2">
                    <div className="custom-control custom-switch">
                      <input
                        type="checkbox"
                        checked
                        className="custom-control-input"
                        id="customSwitch"
                        name="example1"
                      />
                      <label className="custom-control-label"></label>
                    </div>
                  </div>
                  <h5>Panel Header</h5>
                  <div className="right-items mr-2">
                    <button className="btn btn-icon-only btn-text-dark">
                      <i className="modus-icons">unloaded_orders</i>
                    </button>
                  </div>
                </div>
                <div className="panel-body" style={{ flexGrow: 1 }}>
                  <div className="static-container">
                    <div className="d-flex">
                      <button className="btn btn-icon-only btn-text-dark">
                        <i className="modus-icons">filter</i>
                      </button>
                      <button className="btn btn-icon-only btn-text-dark">
                        <i className="modus-icons">layout</i>
                      </button>
                      <button className="btn btn-icon-only btn-text-dark">
                        <i className="modus-icons">route_add</i>
                      </button>
                      <button className="btn btn-icon-only btn-text-dark disabled">
                        <i className="modus-icons">finalize_route</i>
                      </button>
                      <button className="btn btn-icon-only btn-text-dark disabled">
                        <i className="modus-icons">trim_fake_orders</i>
                      </button>
                    </div>
                    <div className="d-flex">
                      <button className="btn btn-icon-only btn-text-dark align-self-end">
                        <i className="modus-icons">sort</i>
                      </button>
                    </div>
                  </div>
                  <div className="scroll-container p-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Panel Content</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo asperiores doloremque dolorum qui
                          ducimus quae eius alias perspiciatis, quod, libero
                          fuga recusandae quidem molestias nobis non soluta.
                          Doloremque, in iusto?
                        </p>
                      </div>
                    </div>
                    <div className="card mt-3">
                      <div className="card-body">
                        <h5 className="card-title">Panel Content</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo asperiores doloremque dolorum qui
                          ducimus quae eius alias perspiciatis, quod, libero
                          fuga recusandae quidem molestias nobis non soluta.
                          Doloremque, in iusto?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-footer">Panel Footer</div>
              </div>
              <div className="modus-content p-5" id="modusContent">
                <h1>Content</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates vel nobis repellat officia, vitae perferendis quis
                  hic at id dignissimos porro similique tempore consequatur
                  repudiandae iste blanditiis tenetur facere minus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates vel nobis repellat officia, vitae perferendis quis
                  hic at id dignissimos porro similique tempore consequatur
                  repudiandae iste blanditiis tenetur facere minus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates vel nobis repellat officia, vitae perferendis quis
                  hic at id dignissimos porro similique tempore consequatur
                  repudiandae iste blanditiis tenetur facere minus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates vel nobis repellat officia, vitae perferendis quis
                  hic at id dignissimos porro similique tempore consequatur
                  repudiandae iste blanditiis tenetur facere minus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates vel nobis repellat officia, vitae perferendis quis
                  hic at id dignissimos porro similique tempore consequatur
                  repudiandae iste blanditiis tenetur facere minus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="modus-footer">Modus Footer</div>
      </div>
    </div>
  </div>
);
