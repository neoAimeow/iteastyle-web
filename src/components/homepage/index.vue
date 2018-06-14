<template>
    <el-container>
        <el-header>
            <el-carousel>
                <el-carousel-item v-for="item in 4" :key="item">
                    {{img}}
                </el-carousel-item>
            </el-carousel>
        </el-header>
        <el-main></el-main>
        <el-footer></el-footer>
    </el-container>
</template>
