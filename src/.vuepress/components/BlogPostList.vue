<script>
export default {
  name: "BlogPostList",
  props: {
    pages: {
      type: Array,
      default: []
    },
    pageSize: {
      type: Number,
      default: 5
    },
    startPage: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentPage: Math.ceil(this.startPage / this.pageSize),
      selectedTags: []
    };
  },
  computed: {
    filteredList () {
      if (this.pages) {
        return this.pages
          .filter(item => {
            const isBlogPost = !!item.frontmatter.blog;
            const isReadyToPublish =
              new Date(item.frontmatter.date) <= new Date();
            // check for locales
            let isCurrentLocale = true;
            if (this.$site.locales) {
              const localePath = this.$route.path.split("/")[1] || "";
              isCurrentLocale = item.relativePath.startsWith(localePath);
            }
            // check if tags contain all of the selected tags
            const hasTags =
              !!item.frontmatter.tags &&
              this.selectedTags.every(tag =>
                item.frontmatter.tags.includes(tag)
              );

            if (
              !isBlogPost ||
              !isReadyToPublish ||
              (this.selectedTags.length > 0 && !hasTags) ||
              !isCurrentLocale
            ) {
              return false;
            }

            return true;
          })
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          );
      }
    },

    totalPages () {
      return Math.ceil(this.filteredList.length / this.pageSize);
    }
  },

  mounted () {
    this.currentPage = Math.min(
      Math.max(this.currentPage, 0),
      this.totalPages - 1
    );
  },

  methods: {
    nextPage () {
      this.currentPage =
        this.currentPage >= this.totalPages - 1
          ? this.totalPages - 1
          : this.currentPage + 1;
    },
    previousPage () {
      this.currentPage = this.currentPage < 0 ? 0 : this.currentPage - 1;
    },
    addTag (tag) {
      const tagExists = this.selectedTags.some(item => {
        return item === tag;
      });

      if (!tagExists) {
        this.selectedTags = this.selectedTags.concat(tag);
      }
    },
    tagClass (tag) {
      if (tag === "Coding") {
        return "coding";
      } else if (tag === "Lifestyle") {
        return "lifestyle";
      } else if (tag === "Board games") {
        return "boardgames";
      }
    },
    removeTag (tag) {
      this.selectedTags.filter(t => t != tag);
    },
    resetTags () {
      this.selectedTags = [];
    }
  }
};
</script>

<template>
  <div>
    <div
      v-if="selectedTags.length > 0"
      class="filtered-heading"
    >
      <h2>Filtered by {{ selectedTags.join(',') }}</h2>
      <button
        type="button"
        @click="resetTags"
        class="btn clear-filter-btn"
      >Clear filter</button>
    </div>
    <ul class="blog-list">
      <li
        v-for="(item, index) in filteredList"
        class="blog-list__item"
      >
        <div class="blog-list__tags-wrapper">
          <ul
            v-for="tag in item.frontmatter.tags"
            class="blog-list__tags"
          >
            <li>
              <button
                class="blog-list__tag"
                :class="tagClass(tag)"
                @click="addTag(tag)"
              >{{ tag }}</button>
            </li>
          </ul>
        </div>
        <!-- TODO: fix pagination. it was for BLogPostPreview: v-show="index >= currentPage * pageSize && index < (currentPage + 1) * pageSize" -->
        <BlogPostPreview :item="item" />
      </li>
    </ul>

    <!-- <div class="pagination">
      <button
        v-show="currentPage > 0"
        @click="previousPage"
        class="button--pagination"
        type="button"
      >Previous</button>
      <button
        v-show="currentPage < totalPages - 1"
        @click="nextPage"
        class="button--pagination"
        type="button"
      >Next</button>
    </div> -->
  </div>
</template>

<style scoped>
.blog-list {
  padding: 0;
  margin: 0;
}

.blog-list__item {
  list-style-type: none;
  margin-bottom: 6rem;
}

.blog-list__tags-wrapper {
  display: flex;
}

.blog-list__tags {
  margin-bottom: 5px;
  margin-right: 5px;
  list-style: none;
  padding: 0;
}

.blog-list__tag {
  color: #fff;
  background-color: teal;
  border: 1px solid grey;
  margin-right: 5px;
  font-size: 16px;
}
.blog-list__tag.lifestyle {
  background-color: yellowgreen;
}
.blog-list__tag.coding {
  background-color: orange;
}
.blog-list__tag.boardgames {
  background-color: purple;
}

.button--pagination {
  background-color: #32c8cf;
  border-radius: 4px;
  color: #fff;
  font-size: 0.8rem;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  box-shadow: 0 0;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.button--pagination:hover {
  background-color: #fff;
  border: 1px solid #32c8cf;
  border-radius: 4px;
  color: #32c8cf;
}

.clear-filter-btn {
  align-self: center;
  margin-left: 20px;
}

.filtered-heading {
  display: flex;
}

.pagination {
  text-align: center;
}
</style>
