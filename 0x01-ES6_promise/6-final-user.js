import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const myUser = await signUpUser(firstName, lastName).then((data) => ({
    status: 'fulfilled',
    value: data,
  }));
    
  const fileUser =  await uploadPhoto(firstName).catch((err) => ({
    status: 'rejected',
    value: err.toString(),
  }));
  return Promise.resolve([myUser, fileUser]);
}
