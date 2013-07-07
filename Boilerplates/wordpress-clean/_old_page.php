<?php

  /**
  *@desc A page. See single.php is for a blog post layout.
  */

  get_header();

  if (have_posts()) : while (have_posts()) : the_post();
  ?>

    <div class="postWrapper" id="post-<?php the_ID(); ?>">

      <h1 class="postTitle"><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></h1>
      <small><?php the_date(); ?> by <?php the_author(); ?></small>
      <?php echo get_avatar( $comment, 32 ); ?>  
      
      <div class="post"><?php the_content(__('(more...)')); ?></div>
      <p class="postMeta"><?php edit_post_link(__('Edit'), ''); ?></p>
    </div>
  
  <?php
  comments_template();

  endwhile; else: ?>
  
    <p>Sorry, no pages matched your criteria.</p>

<?php
  endif;

  get_footer();
?>