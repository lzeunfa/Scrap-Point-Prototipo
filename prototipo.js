function go(id){
    document.querySelectorAll('.scr').forEach(function(s){s.classList.toggle('on',s.id==='s-'+id)});

    document.querySelectorAll('#menu button').forEach(function(b){b.classList.toggle('on',b.dataset.go===id)});
}

document.addEventListener('click',function(e){
    var t=e.target.closest('[data-go]');
    if(t){
        go(t.dataset.go)
    }
});

document.querySelectorAll('[data-chip]').forEach(function(c){
    c.addEventListener('click',function(){
        document.querySelectorAll('[data-chip]').forEach(function(x){x.classList.remove('on')});
        c.classList.add('on');
    });
});

document.querySelectorAll('#stars i').forEach(function(s,i,all){
    s.addEventListener('click',function(){
        all.forEach(function(x,j){x.classList.toggle('f',j<=i)})
    });
});

document.querySelectorAll('[data-role]').forEach(function(c){
    c.addEventListener('click',function(){
        document.querySelectorAll('[data-role]').forEach(function(x){x.classList.remove('on')});
        c.classList.add('on');
        var col=c.dataset.role==='c';
        document.getElementById('veic').style.display=col?'block':'none';
        document.getElementById('idade').style.display=col?'block':'none';
    });
});

go('login');