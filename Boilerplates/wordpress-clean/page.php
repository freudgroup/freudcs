<?php
/**
 * Template Name: Basic Page
 *
 *
 * @package WordPress
 * @subpackage Clean
 * @since Clean 1.0
 */

  /**
  *@desc A page. See single.php is for a blog post layout.
  */

  get_header();

  if (have_posts()) : while (have_posts()) : the_post();
  ?>

    <div class="postWrapper" id="post-<?php the_ID(); ?>">
      <h1 class="postTitle"><?php the_title(); ?></h1>
      <div class="post"><?php the_content(__('(more...)')); ?></div>
    </div>
  
  <?php

  endwhile; else: ?>
  
    <p>Sorry, no pages matched your criteria.</p>

<?php
  endif;

  get_footer();
?>