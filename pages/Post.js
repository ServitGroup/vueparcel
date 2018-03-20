export default {
    template: `<div><pre>{{posts}}</pre>
    <hr/>
        <table class="f6 w-100 mw8 center"
        <thead>
            <tr>
                <th class="fw6 bb b--black-20 tl pb3 bg-white">Id</th>
                <th class="fw6 bb b--black-20 tl pb3 bg-white">Title</th>
                <th class="fw6 bb b--black-20 tl pb3 bg-white">Author</th>
                <th class="fw6 bb b--black-20 tl pb3 bg-white">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts">
                <td v-for="key in Object.keys(post)" class="pv3 pr3 bb b--black-20">{{post[key]}}</td>
                <td class="pv3 pr3 bb b--black-20">{{post.id}}</td>
                <td class="pv3 pr3 bb b--black-20">{{post.title}}</td>
                <td class="pv3 pr3 bb b--black-20">{{post.author}}</td>
                <td>
                <a href="#">add</a>
                |
                <a href="#">update</a>
                |
                <a href="#">delete</a>
                </td>
            </tr>
        </tbody>
        </table>
 <article class="center mw5 mw6-ns hidden ba mv4" v-for="post in posts" :key="post.id">
  <h1 class="f4 bg-near-black white mv0 pv2 ph3">{{post.title}}</h1>
  <div class="pa3 bt">
    <p class="f6 f5-ns lh-copy measure mv0">
      {{post.author}}
    </p>
  </div>
</article>
    </div>`,
    name: "Post",
    mixins: [],
    data() {
        return {
            theme: "AdminLte",
            posts: []
        };
    },
    created() {
        window.vc = this;
        console.log("vc computer is created");
        const getdata = async() => {
            let postget = await this.$http.get("http://localhost:3000/posts");
            this.posts = postget.data;
            let commget = await this.$http.get("http://localhost:3000/comments");
            this.comments = commget.data;
            console.log(this.posts, this.comments);
        };
        getdata();
        //  then catch
        //    this.$http
        //         .get("http://localhost:3000/posts")
        //         .then(rs => {
        //             console.log(rs.data);
        //             this.posts = rs.data;
        //         })
        //         .catch(console.log);
    },
    mounted() {},
    methods: {},
    computed: {},
    components: {}
};