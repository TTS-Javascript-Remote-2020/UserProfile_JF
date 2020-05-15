//https://repl.it/@juliefield/UserProfileHomework

var userProfile = {
	name: 'Firstname Lastname',
	address: '123 Address St.',
	city: 'City',
  state: 'State',
  zipcode: '12345',
  avatar: 'avatar.jpg'
}

function getProfileUpdate() {
  prompt("Update your Profile Information: ");
};

var updateProfile = Object.assign({}, userProfile, {
	name: 'Julie Field',
	address: '111 New Address st.',
	city: 'Columbus',
  state: 'Ohio',
  zipcode: '43221',
  avatar: 'julie.jpg'
});

console.log(userProfile);
getProfileUpdate();
console.log(updateProfile);
