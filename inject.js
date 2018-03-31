chrome.storage.sync.get(
    [
        'chz_bbs_subject',
        'chz_bbs_message'
    ],
    function(result)
    {
        let dom_subject = document.getElementsByName("subject")[0];
        let dom_message = document.getElementsByName("message")[0];

        console.log(result.chz_bbs_subject);
        if(result.chz_bbs_subject != undefined && dom_subject.value.length == 0) dom_subject.value = result.chz_bbs_subject;
        if(result.chz_bbs_message != undefined && dom_message.value.length == 0) dom_message.value = result.chz_bbs_message;
    }
);