/**
 * @file vue-cli3安装vue-cli-plugin-element插件时会自动生成本文件
 * @copyright NanJing Anshare Tech .Com
 * @createDate 2018年11月13日11:29:53
 */
/* eslint-disable */
import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';// 白垩主题，此文件在node_modules下的elementui包内
import '@/styles/element-ui-override.scss';// 客制化elementui，我自己创建的
import '@/styles/element-variables.scss'; // 自定义element ui主题颜色

Vue.use(Element);
