<template>
  <div>
        <div id="carousel-example-generic" style="margin-top:50px" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="../images/cro1.jpg" alt="..." width="100%">
                    <div class="carousel-caption">
                        ...
                    </div>
                </div>
                <div class="item">
                    <img src="../images/cro2.jpg" alt="..." width="100%">
                    <div class="carousel-caption">
                        ...
                    </div>
                </div>
                <div class="item">
                    <img src="../images/cro3.jpg" alt="..." width="100%">
                    <div class="carousel-caption">
                        ...
                    </div>
                </div>
            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div class="container marketing">
            <div class="row">
                <div class="col-lg-3">
                    <img src="../images/rcm1.jpg" alt="Generic placeholder image" width="100%">
                    <h2>New Gear</h2>
                    <p>For Your New Guitar</p>
                    <p><a class="btn btn-danger" href="#" role="button">LEARN MORE </a></p>
                </div>
                <div class="col-lg-3">
                    <img src="../images/rcm2.jpg" alt="Generic placeholder image" width="100%">
                    <h2>Indio</h2>
                    <p>Bluetooth Speaker</p>
                    <p><a class="btn btn-danger" href="#" role="button">LEARN MORE</a></p>
                </div>
                <div class="col-lg-3">
                    <img src="../images/rcm3.png" alt="Generic placeholder image" width="100%">
                    <h2>Squier</h2>
                    <p>Find Your Sound</p>
                    <p><a class="btn btn-danger" href="#" role="button">LEARN MORE</a></p>
                </div>
                <div class="col-lg-3">
                    <img src="../images/rcm4.jpg" alt="Generic placeholder image" width="100%">
                    <h2>Alternate Reality</h2>
                    <p>The Powercaster</p>
                    <p><a class="btn btn-danger" href="#" role="button">LEARN MORE</a></p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="">
</style>