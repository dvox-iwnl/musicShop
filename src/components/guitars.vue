<template>
    <div>
        <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Guitars</a></li>
        </ol>

        <ul class="filterslist">
            <li>FILTERS</li>
            <li>
                MODEL
                <ul>
                    <li><input type="checkbox">Stratocaster® (85)</li>
                    <li><input type="checkbox">Telecaster® (59)</li>
                    <li><input type="checkbox">Jazzmaster (18)</li>
                    <li><input type="checkbox">Jaguar® (13)</li>
                    <li><input type="checkbox">Mustang (4)</li>
                    <li><input type="checkbox">Duo-Sonic® (3)</li>
                    <li><input type="checkbox">Other (3)</li>
                    <li><input type="checkbox">Jaguar (2)</li>
                    <li><input type="checkbox">Stratocaster (2)</li>
                    <li><input type="checkbox">Jazz Bass® (1)</li>
                    <li><input type="checkbox">Telecaster (1)</li>
                </ul>
            </li>
            <li>
                SERIES
                <ul>
                    <li><input type="checkbox">American Original (9)</li>
                    <li><input type="checkbox">American Deluxe (6)</li>
                    <li><input type="checkbox">American Professional (9)</li>
                    <li><input type="checkbox">American Elite (5)</li>
                    <li><input type="checkbox">American Special (3)</li>
                    <li><input type="checkbox">American Standard (2)</li>
                    <li><input type="checkbox">American Vintage (9)</li>
                    <li><input type="checkbox">Artist (33)</li>
                    <li><input type="checkbox">Classic (34)</li>
                    <li><input type="checkbox">Deluxe (7)</li>
                    <li><input type="checkbox">Limited Edition (22)</li>
                </ul>
            </li>   
            <li>
                ORIENTATION
                <ul>
                    <li><input type="checkbox">Right-Hand (172)</li>
                    <li><input type="checkbox">Left-Hand (14)</li>
                </ul>
            </li>
        </ul>
        
        <div class="container">
            <div class="row">
                <div class="col-sm-4 ">
                    <input type="checkbox">
                    <img class="center-block" src="../images/gt1.jpg" alt="">
                </div>
                <div class="col-sm-4 center-block">
                    <input type="checkbox">
                    <img class="center-block" src="../images/gt2.jpg" alt="">
                </div>
                <div class="col-sm-4 center-block">
                    <input type="checkbox">
                    <img class="center-block" src="../images/gt3.jpg" alt="">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <input type="checkbox">
                    <img class="center-block" src="../images/gt4.jpg" alt="">
                </div>
                <div class="col-sm-4">
                    <input type="checkbox">
                    <img class="center-block" src="../images/gt5.jpg" alt="">
                </div>
                <div class="col-sm-4">
                    <input type="checkbox">
                    <img class="center-block" src="../images/gt6.jpg" alt="">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <input type="checkbox">
                    <img class="center-block" src="../images/gt1.jpg" alt="">
                </div>
                <div class="col-sm-4">
                    <input type="checkbox">
                    <img class="center-block" src="../images/gt1.jpg" alt="">
                </div>
                <div class="col-sm-4">
                    <input type="checkbox">
                    <img class="center-block" src="../images/gt1.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    ul{
        list-style-type:none;
    } 
    .filterslist{
        float:left;
    }   
</style>