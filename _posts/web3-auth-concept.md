---
date: '2021-09-22'
title: 'A Web Without Passwords'
tags: web3
---

To me one of the most interesting yet underrated aspects of cryptocurrencies is not the currency itself, but the side-card technologies that it’s slowly making more common. MetaMask for example, is in essence it’s a private key manager, but it makes the process of signing transactions relatively seamless by providing a user-friendly GUI.

This unlocks some interesting capabilities, since not only can we use these wallets to sign transactions, but any arbitrary data.

We could even use this for user authentication. The process would go something like this:

1. The client’s wallet address acts as their public key and unique identifier. Think of it like a user ID or e-mail address.
2. To verify that the user owns the address, the server generates a unique one-time code, and has the user sign a message containing that code, using their private key.
3. The server examines the signed message, and recovers the public key that was used to sign it. If the signer of the message has the same public key as the account, then we know the user controls the account.
4. It would be inconvenient to have the user sign every request, so if the user is authenticated, the server encrypts a token that grants the user appropriate privileges.

Subsequent requests will include this token in the header of the request, and the server will then verify the token has not been altered before decoding the contents to authenticate the user’s permissions.

For the client, the process just involves signing a message. There is no registration step required from the client, and since we are not interacting with the blockchain, the action incurs no fees or transaction costs.

Most importantly though, this greatly reduces the overhead necessary to securely manage passwords and user information. Any sensitive information that does need to be stored could be encrypted with the user’s private key, and decrypted client-side.

Instead of concentrating security risk entirely on the server, this distributes it to the client, localizing the impact of any compromised keys.

In theory, multi-signature wallets like EOS would additionally allow for an Active Disrectory-like permission structure to be established, so in the event of a user losing their keys, their existing ones could be invalidated and replaced with the authorization of an administrative account.
