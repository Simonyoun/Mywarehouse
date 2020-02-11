function sql(name,shoujihao, mima){
        var db;
        var request = window.indexedDB.open("mDb11");
             request.onerror = function (event) {
                    console.log("创建成功");
             }
            request.onupgradeneeded = function (event) {
                   db = event.target.result;
                   var objectStore;
                  if (!db.objectStoreNames.contains('person')) {
                      objectStore = db.createObjectStore('person', { keyPath: 'id', autoIncrement: true });
                          objectStore.createIndex('shoujihao', 'shoujihao', { unique: true });
                  }
            }
            request.onsuccess = function (event) {
                  db = event.target.result;
                var request = db.transaction(['person'], 'readwrite').objectStore('person').add({name: name, shoujihao: shoujihao, mima: mima});
                  request.onsuccess = function (event) {
                         window.location.href = "../index.html";
                 };
                  request.onerror = function (event) {
                         window.location.href = "./zhuce.html";
                 }
            }
}
function selse(shoujihao,mima,dom) {
    var db;
    var request = window.indexedDB.open("mDb11");
    request.onsuccess = function (event) {
        db = event.target.result;
        var request = db.transaction(['person'], 'readwrite').objectStore('person').index("shoujihao").get(shoujihao);
        request.onsuccess = function (event) {
            var student = event.target.result;
            if(student){
                if (mima==student.mima){
                    dom(student);
                   }else{
                       alert("登录失败"); 
                   }
            }else{
                 alert("登录失败");
            }
                
        };
        request.onerror = function (event) {
           
        }
    }
}
function gong(src,shoujihao,jiage,shouliaong,name) {
    var db;
    var request = window.indexedDB.open("nuoi");
    request.onerror = function (event) {
        console.log("创建成功");
    }
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        var objectStore;
        if (!db.objectStoreNames.contains('gongche')) {
            objectStore = db.createObjectStore('gongche', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('shoujihao', 'shoujihao', { unique: false});
        }
    }
    request.onsuccess = function (event) {
        db = event.target.result;
        var request = db.transaction(['gongche'], 'readwrite').objectStore('gongche').add({src:src,shoujihao:shoujihao, jiage:jiage, shouliaong:shouliaong,name:name});
        request.onsuccess = function (event) {
              alert("下单成功");
              window.location.href = "../../index.html";
        };
        request.onerror = function (event) {
              alert("下单失败");
        }
    }
}
function goou(shoujihao,dom) {
    var db;
    var request = window.indexedDB.open("nuoi");
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        var objectStore;
        if (!db.objectStoreNames.contains('gongche')) {
            objectStore = db.createObjectStore('gongche', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('shoujihao', 'shoujihao', { unique: false });
        }
    }
    request.onsuccess = function (event) {
        db = event.target.result;
        var request = db.transaction(['gongche'], 'readwrite').objectStore('gongche').index("shoujihao").openCursor(shoujihao);
        request.onsuccess = function (event) {
            var student = event.target.result;
            
            if (student) {
                dom(student.value);
                student.continue();
            }
            
        };
        
        request.onerror = function (event) {

        }
    }
}
function delet(id) {
    var db;
    var request = window.indexedDB.open("nuoi");
    request.onsuccess = function (event) {
        db = event.target.result;
        var request = db.transaction(['gongche'], 'readwrite').objectStore('gongche').delete(id);
        request.onsuccess = function (event) {
              alert("删除成功");
              window.location.href = "./index.html";
        };

        request.onerror = function (event) {

        }
    }
}
function ajdhfjhdheu(shoujihao, dghgffg) {
    var db;
    var request = window.indexedDB.open("ertsdfgs");
    request.onerror = function (event) {
        console.log("创建成功");
    }
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        var objectStore;
        if (!db.objectStoreNames.contains('person')) {
            objectStore = db.createObjectStore('person', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('shoujihao', 'shoujihao', { unique: true });
        }
    }
    request.onsuccess = function (event) {
        db = event.target.result;
        var request = db.transaction(['person'], 'readwrite').objectStore('person').add({ shoujihao: shoujihao, dghgffg: dghgffg });
        request.onsuccess = function (event) {
            alert("添加成功");
            window.location.href = "../html/personalcentrr.html";
        };
        request.onerror = function (event) {
            alert("添加失败")
        }
    }
}
function aghsdfghd(shoujihao, dom) {
    var db;
    var request = window.indexedDB.open("ertsdfgs");
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        var objectStore;
        if (!db.objectStoreNames.contains('person')) {
            objectStore = db.createObjectStore('person', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('shoujihao', 'shoujihao', { unique: true });
        }
    }
    request.onsuccess = function (event) {
        db = event.target.result;
        var request = db.transaction(['person'], 'readwrite').objectStore('person').index("shoujihao").get(shoujihao);
        request.onsuccess = function (event) {
            var student = event.target.result;
            if (student) {
                dom(student.dghgffg);
            }

        };
        request.onerror = function (event) {

        }
    }
}






function dgfjhgdh(shoujihao,fgghh, mima) {
    var db;
    var request = window.indexedDB.open("mDb11");
    request.onsuccess = function (event) {
        db = event.target.result;
        var request = db.transaction(['person'], 'readwrite').objectStore('person').index("shoujihao").get(shoujihao);
        request.onsuccess = function (event) {
            var student = event.target.result;
            if (student) {
                if (fgghh == student.mima) {
                    var requ = db.transaction(['person'], 'readwrite').objectStore('person').put({ id: student.id, shoujihao: student.shoujihao, mima: mima, name:student.name});
                     requ.onsuccess = function (event){
                                alert("修改成功");
                                window.location.href = "../html/personalcentrr.html";
                    }
                    requ.onerror = function (event) {
                               alert("修改失败");
                    }
                } else {
                    alert("旧密码错误");
                }
            
            }

        };
        request.onerror = function (event) {

        }
    }
}
function ytseygdzjhxgcs(shoujihao, dizhi) {
    var db;
    var request = window.indexedDB.open("mDetryd");
    request.onerror = function (event) {
        console.log("创建成功");
    }
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        var objectStore;
        if (!db.objectStoreNames.contains('person')) {
            objectStore = db.createObjectStore('person', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('shoujihao', 'shoujihao', { unique: true });
        }
    }
    request.onsuccess = function (event) {
        db = event.target.result;
        var request = db.transaction(['person'], 'readwrite').objectStore('person').add({ shoujihao: shoujihao, dizhi: dizhi });
        request.onsuccess = function (event) {
            alert("添加成功");
            window.location.href = "../html/personalcentrr.html";
        };
        request.onerror = function (event) {
            alert("添加失败")
        }
    }
}
function cjfhdfhgsd(shoujihao, dom) {
    var db;
    var request = window.indexedDB.open("mDetryd");
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        var objectStore;
        if (!db.objectStoreNames.contains('person')) {
            objectStore = db.createObjectStore('person', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('shoujihao', 'shoujihao', { unique: true });
        }
    }
    request.onsuccess = function (event) {
        db = event.target.result;
        var request = db.transaction(['person'], 'readwrite').objectStore('person').index("shoujihao").get(shoujihao);
        request.onsuccess = function (event) {
            var student = event.target.result;
            if (student) {
                dom(student);
            }

        };
        request.onerror = function (event) {

        }
    }
}