export class GithubUser {

    public name: string;
    public username: string;
    public avatarUrl: string;
    public isAdmin: boolean;

    public followers: number;
    public following: number;
    public publicRepos: number;
    public location: string;
    public bio: string;

    public organizations: string[] = new Array();

    public setUserInfo(username: string, avatarUrl: string, isAdmin: boolean) {
        this.username = username;
        this.avatarUrl = avatarUrl;
        this.isAdmin = isAdmin;
    }

    public setUserDetails(name: string, followers: number, following: number, publicRepos: number, location: string, bio: string){
        this.name = name;
        this.followers = followers;
        this.following = following;
        this.publicRepos = publicRepos;
        this.location = location;
        this.bio = bio;
    }

    public setOrganizations(organizations: string[]){
        this.organizations = organizations;
    }

}
