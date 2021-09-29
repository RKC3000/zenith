function Schedule() {
    return (
        <section className="min-h-screen">

            <h1>Schedule</h1>

            <div className="container-fluid blue-bg">
                <div className="container">
                    <h2 className="pb-3 pt-2">Vertical Left-Right Timeline</h2>
                    {/* first section */}
                    <div className="row align-items-center how-it-works">
                        <div className="col-2 text-center bottom">
                            <div className="circle">1</div>
                        </div>
                        <div className="col-6">
                            <h5>Fully Responsive</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
                        </div>
                    </div>
                    {/* path between 1-2 */}
                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>
                    {/* second section */}
                    <div className="row align-items-center justify-content-end how-it-works">
                        <div className="col-6 text-right">
                            <h5>Using Bootstrap</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
                        </div>
                        <div className="col-2 text-center full">
                            <div className="circle">2</div>
                        </div>
                    </div>
                    {/* path between 2-3 */}
                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner right-bottom"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner top-left"></div>
                        </div>
                    </div>
                    {/* third section */}
                    <div className="row align-items-center how-it-works">
                        <div className="col-2 text-center top">
                            <div className="circle">3</div>
                        </div>
                        <div className="col-6">
                            <h5>Now with Pug and Sass</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
                        </div>
                    </div>
            </div>
</div>
        </section>
        
    )
}

export default Schedule;
