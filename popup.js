var state = document.getElementById('state');
var subject = document.getElementById('subject');
var message = document.getElementById('message');
var save = document.getElementById('save');

function set_local_storage()
{
    chrome.storage.sync.set(
        {
            'chz_bbs_subject': subject.value,
            'chz_bbs_message' : message.value
        },
        function()
        {
            save.innerHTML = "sauvegardé ^.^"

            setTimeout(
                function()
                {
                    save.innerHTML = "sauvegarder"
                },
                1000
            );
        }
    );
}

function get_local_storage()
{
    chrome.storage.sync.get(
        [
            'chz_bbs_subject',
            'chz_bbs_message'
        ],
        function(result)
        {
            if(result.chz_bbs_subject != undefined) subject.value = result.chz_bbs_subject;
            if(result.chz_bbs_message != undefined) message.value = result.chz_bbs_message;
        }
    );
}

get_local_storage();
save.addEventListener('click', set_local_storage);