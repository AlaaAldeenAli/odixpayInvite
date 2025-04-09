<script lang="ts" setup>
import { AnimatePresence, motion } from 'motion-v'


const { $uaParser } = useNuxtApp();
const route = useRoute()
const runtimeconfig = useRuntimeConfig()
let timer: any;
const userData = reactive({
    userAgent: '',
    ipAddress: '',
    clickTime: '',
    deviceInfo: {},
    userId: ''
})


const { data, status, error, refresh, clear } = await useAsyncData(
    'mountains',
    () => $fetch('/api/ping', {
        headers: useRequestHeaders(['cookie', 'x-forwarded-for']),

    }),



)
userData.ipAddress = data.value.address
const sendUserData = async () => {
    try {
        const sendData = await $fetch(runtimeconfig.public.apiUrl, {
            credentials: 'omit',
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({
                "ip": userData.ipAddress,
                // "userId": userData.userId,
                "referralCode": route.query.code || "",
                "userAgent": userData.userAgent,
                "clickTime": userData.clickTime,
                "deviceSpecs": userData.deviceInfo,
                "inviterId": route.query.id || "",
                "deviceId": userData.userId,
                "deviceModel": userData.deviceInfo.deviceModel,
                "deviceBrand": userData.deviceInfo.deviceVendor
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });


        timer = setTimeout(() => {
            navigateTo('https://apps.apple.com/us/app/odixpay-crypto-wallet-card/id6736972556', {
                external: true,
            })
        }, 3000)
    } catch (error) {
        return showError({ statusCode: error.statusCode, statusMessage: "Something went wrong" })
    }
};


onMounted(async () => {

    if (!route.query.id || !route.query.code) {
        return showError({ statusCode: 404, statusMessage: 'Not Found' })
    }

    userData.userAgent = navigator.userAgent
    userData.clickTime = new Date().toISOString()
    userData.userId = route.query.id
    userData.deviceInfo = {
        deviceType: $uaParser.device.type || `Desktop`,
        deviceVendor: $uaParser.device.vendor || `Unknown Vendor`,
        deviceModel: $uaParser.device.model || `Unknown Model`,
        os: $uaParser.os.name + '__' + $uaParser.os.version || `Unknown OS`,
        browserName: $uaParser.browser.name || `Unknown Browser`,
        cpu: $uaParser.cpu.architecture || `Unknown CPU`

    };


    await sendUserData()

})

onUnmounted(() => {
    clearTimeout(timer)
})
</script>



<template>

    <div class="flex flex-col items-center justify-center ">
        <div class="flex  items-center justify-center mb-4 space-x-[-32px] drop-shadow-md">
            <img src="/odixApp.svg" class="size-[74px] " />
            <img class="size-[74px] " src="/appstore.png" alt="">
        </div>
        <h1 class="text-xl  font-[300] text-gray-800 text-center capitalize loading mx-auto relative">Redirecting to
            AppStore</h1>

    </div>



</template>