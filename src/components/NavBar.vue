<template>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">            
        <div class="container">   
            <a class="navbar-brand" href="#">VUECART</a>             
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Products <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>  
                <ul class="navbar-right">
                    <li><a href="#" role="button" aria-expanded="false"> <i class="fas fa-shopping-cart"></i> Cart <span class="badge">3</span></a></li>
                </ul> <!--end navbar-right -->              
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
ul{
    margin: 0px;
    padding: 0px;
}
ul li a{
    color: #fff;
}
.badge {
    background-color: #6394F8;
    border-radius: 10px;
    color: white;
    display: inline-block;
    font-size: 12px;
    line-height: 1;
    padding: 3px 7px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
}
</style>
