(function() {
	const ema= document.getElementById('usemail');
	const ps= document.getElementById('uspass');
	const log= document.getElementById('blog');
	const sig= document.getElementById('bsig');
	const nlog= document.getElementById('bnlog');
	const subl= document.getElementById('sublink');
	log.addEventListener('click', e => {
		const em=ema.value;
		const p=ps.value;
		const auth=firebase.auth();
		const promise = auth.signInWithEmailAndPassword(em,p);
		promise.catch(e => console.log(e.message));
	});
	sig.addEventListener('click', e => {
		const em=ema.value;
		const p=ps.value;
		const auth=firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(em,p);
		promise.catch(e => console.log(e.message));
	});
	nlog.addEventListener('click', e => {
		firebase.auth().signOut();
	});
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
			nlog.style.display='inline';
			log.style.display='none';
			subl.style.display='inline';
			sig.style.display='none';
		}
		else {
			console.log('not logged in');
			nlog.style.display='none';
			log.style.display='inline';
			subl.style.display='none';
			sig.style.display='inline';
		}
	});
}());