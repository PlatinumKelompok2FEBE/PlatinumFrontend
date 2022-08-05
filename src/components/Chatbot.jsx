const Chatbot = () => {
    ;(function (d, m) {
        var kommunicateSettings = {
            appId: "17b1e5e92ad7405e6b9d540dba4072eb5",
            popupWidget: true,
            automaticChatOpenOnNavigation: true,
        }
        var s = document.createElement("script")
        s.type = "text/javascript"
        s.async = true
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app"
        var h = document.getElementsByTagName("head")[0]
        h.appendChild(s)
        window.kommunicate = m
        m._globals = kommunicateSettings
    })(document, window.kommunicate || {})

    return <div></div>
}

export default Chatbot
