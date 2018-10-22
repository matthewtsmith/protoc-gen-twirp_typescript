// Generated by protoc-gen-twirp_typescript. DO NOT EDIT
import {twitch} from './service.pb';
import {createTwirpAdapter} from './twirp';

const getServiceMethodName = (fn: any): string => {
	if (fn == twitch.twirp.example.Haberdasher.prototype.makeHat) {
		return 'MakeHat';
    }

    throw 'Unknown Method';
};


export const createHaberdasher = (hostname: string): twitch.twirp.example.Haberdasher => {
    return twitch.twirp.example.Haberdasher.create(createTwirpAdapter(hostname + '/twirp/twitch.twirp.example.Haberdasher/', getServiceMethodName));
};
