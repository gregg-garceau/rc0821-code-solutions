select "c"."name" as "genre",
  count ("c".*) as "appearances"
  from "actors" as "a"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  join "filmCategory" using ("filmId")
  join "categories" as "c" using ("categoryId")
 where "a"."actorId" = 178
 group by "c"."categoryId";
