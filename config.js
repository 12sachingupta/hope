var appsConfig = {
    reCAPTCHA_enabled: true,
    reCAPTCHA_sitekey: "6Lfax6MUAAAAAPq190l3AjgpMjiCXwRX7E3Mqs1z",
    reCAPTCHA_faketoken: "null", // must be equal to 'null' when deployed on the server

    maxContentSizeInBytes: 1024 * 1024 * 6, // 6 MB (also checked at the server side)

    alpr: {
        serviceAddr: window.atob("aHR0cHM6Ly9mcmExLmNsb3VkLmRvdWJhbmdvLm9yZzo5NzAw")
    },
    cbir: {
        serviceAddr: window.atob("aHR0cHM6Ly9mcmExLmNsb3VkLmRvdWJhbmdvLm9yZzo5NTAw"),
        imagesAddr: "/cbir",

        minConfidence: 51,

        maxKeywordsInCloud: 200,
        maxKeywordsInAutoComplete: 10,

        numItemPerCol: 4,
        numItemPerRow: 10
    },
    micr: {
        serviceAddr: window.atob("aHR0cHM6Ly9mcmExLmNsb3VkLmRvdWJhbmdvLm9yZzo5NDAw")
    },
    mrz: {
        serviceAddr: window.atob("aHR0cHM6Ly9mcmExLmNsb3VkLmRvdWJhbmdvLm9yZzo5MzAw")
    },
    ocr: {
        serviceAddr: window.atob("aHR0cHM6Ly9mcmExLmNsb3VkLmRvdWJhbmdvLm9yZzo5MDAw")
    },
    ccard: {
        serviceAddr: window.atob("aHR0cHM6Ly9mcmExLmNsb3VkLmRvdWJhbmdvLm9yZzo5OTAw"),
        tooLargeInPixels: 1200
    },
    face_liveness: {
        serviceAddr: window.atob("aHR0cHM6Ly9mcmExLmNsb3VkLmRvdWJhbmdvLm9yZzo5MTAw")
    },
    kyc_ocr: {
        serviceAddr: window.atob("aHR0cHM6Ly9mcmExLmNsb3VkLmRvdWJhbmdvLm9yZzo5MjAw")
    }
}