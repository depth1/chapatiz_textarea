chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse)
    {
        if (request.localstorage == "chz_subject")
        {
            chrome.storage.sync.get(
                ['chz_subject'],
                function(result)
                {
                    sendResponse({chz_subject: result.chz_subject});
                }
            );
        }
        else if (request.localstorage == "chz_message")
        {
            chrome.storage.sync.get(
                ['chz_message'],
                function(result)
                {
                    sendResponse({chz_message: result.chz_message});
                }
            );
        }
        else
        {
            sendResponse({}); 
        }
    }
);