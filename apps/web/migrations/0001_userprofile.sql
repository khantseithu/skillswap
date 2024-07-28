ALTER TABLE `user` ADD `bio` text;--> statement-breakpoint
ALTER TABLE `user` ADD `introVideo` text;--> statement-breakpoint
ALTER TABLE `user` ADD `skillsToTeach` text;--> statement-breakpoint
ALTER TABLE `user` ADD `skillsToLearn` text;--> statement-breakpoint
ALTER TABLE `user` ADD `linkedin` text;--> statement-breakpoint
ALTER TABLE `user` ADD `ratings` text;--> statement-breakpoint
ALTER TABLE `user` ADD `achievements` text;--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);